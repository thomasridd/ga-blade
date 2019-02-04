const fs = require("fs");
const { inputRequired } = require("./utils");

const authors = JSON.parse(fs.readFileSync("./data/author.json"));

module.exports = plop => {
  plop.setGenerator("doc", {
    prompts: [
      {
        type: "input",
        name: "title",
        message: "Document title?",
        validate: inputRequired("title")
      },
      {
        type: "list",
        name: "author",
        message: "The author of doc?",
        choices: authors.map(author => ({ name: author.id, value: author.id }))
      },
      {
        type: "input",
        name: "tags",
        message: "tags? (separate with coma)"
      },
      {
        type: "confirm",
        name: "draft",
        message: "It's a draft?"
      }
    ],
    actions: data => {
      // Get current date
      data.createdDate = new Date().toISOString().split("T")[0];

      // Parse tags as yaml array
      if (data.tags) {
        data.tags = `\ntags:\n  - ${data.tags.split(",").join("\n  - ")}`;
      }

      return [
        {
          type: "add",
          path: "../data/docs/{{createdDate}}--{{dashCase title}}/index.md",
          templateFile: "templates/doc-md.template"
        }
      ];
    }
  });
};

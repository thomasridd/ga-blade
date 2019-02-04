/* tslint:disable no-var-requires */
const withReadme = (require("storybook-readme/with-readme") as any).default;
const DocsPaginationReadme = require("./README.md");

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, number } from "@storybook/addon-knobs";
import DocsPagination from "./DocsPagination";

const LinkStub = ((props: any) => (
  <div {...props} onClick={action(props.to.toString())}>
    {props.children}
  </div>
)) as any;

storiesOf("DocsPagination", module)
  .addDecorator(withReadme(DocsPaginationReadme))
  .addDecorator(withKnobs)
  .add("default", () => {
    const activePage = number("activePage", 1);
    const pathname = `/docs/page/${activePage}/`;
    const pageCount = number("pageCount", 10);

    return (
      <DocsPagination
        pathname={pathname}
        Link={LinkStub}
        pageCount={pageCount}
      />
    );
  });

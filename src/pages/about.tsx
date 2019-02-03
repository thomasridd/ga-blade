import * as React from "react";
import { Header, Container, Segment, Icon } from "semantic-ui-react";
import { withLayout } from "../components/Layout";

const AboutPage = () => {
  return (
    <Container>
      <Segment vertical>
        <Header as="h2">
          <Icon name="info circle" />
          <Header.Content>About</Header.Content>
        </Header>
      </Segment>
      <Segment vertical>
        <p>
          This is a simple website to validate that a pipeline comprising
          Gatsby, GitHub, Heroku, Amazon serverless components and
          serverless.com is a valid architecture for the OfS beta project
        </p>
      </Segment>
    </Container>
  );
};

export default withLayout(AboutPage);

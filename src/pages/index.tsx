import * as React from "react";
import { Link } from "gatsby";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { withLayout, LayoutProps, menuItems } from "../components/Layout";
import {
  Button,
  Segment,
  Container,
  Grid,
  Header,
  Icon
} from "semantic-ui-react";

const IndexPage = (props: LayoutProps) => (
  <div>
    {/* Master head */}
    <Segment vertical inverted textAlign="center" className="masthead">
      <HeaderMenu
        Link={Link}
        pathname={props.location.pathname}
        items={menuItems}
        inverted
      />
      <Container text>
        <Header inverted as="h1">
          Office for Students
        </Header>
        <Header inverted as="h2">
          A website to help prospective higher education students with decision
          making
        </Header>
      </Container>
    </Segment>

    {/* About this starter */}
    <Segment vertical textAlign="center" className="stripe">
      <Header as="h1">How do I choose a course?</Header>

      <Grid stackable verticalAlign="top" className="container">
        <Grid.Row>
          <Grid.Column width="8">
            <Header>Subject</Header>
            <p>
              It's important you choose the right subject for you. Some choose
              based on what they have enjoyed learning in the past or what best
              suites their interests while others choose a subject area that
              could lead into a certain career
            </p>
          </Grid.Column>
          <Grid.Column width="8">
            <Header>Entry requirements</Header>
            <p>
              Universities and colleges set their own entry requirements for
              each course. These include qualifications like A levels but often
              other things like interests, skills and background are taken into
              account, so it's worth understanding what is involved so you can
              choose the best course for you.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width="8">
            <Header>Outcomes</Header>
            <p>
              What do you want to get out of your course? Find out what
              information is available to help you choose a course that is most
              likely to achieve your aims.
            </p>
          </Grid.Column>
          <Grid.Column width="8">
            <Header>How the course is taught</Header>
            <p>
              Different courses are taught in different ways. It can help to
              reflect on what your learning style is before you choose a course,
              for example whether you prefer coursework or exams, and whether
              you want to think about part time study or distance learning
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width="8">
            <Header>Location</Header>
            <p>
              There are various things to consider when thinking about where to
              study. Some students stay close to home because of other
              commitments or to save money on accommodation, while others want
              to live somewhere new.
            </p>
          </Grid.Column>
          <Grid.Column width="8">
            <Header>Costs</Header>
            <p>
              The financial implications of going to university or college can
              be intimidating but this doesn't have to put you off. In addition
              to tuition fees and student loans you can find out what other
              financial support there might be available such as grants or
              bursaries.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width="8">
            <Header>Student support</Header>
            <p>
              Going into higher education can be a big step so it's important to
              know how to get the support you need. This can include things like
              careers guidance while at university or college, study support or
              mental health services
            </p>
          </Grid.Column>
          <Grid.Column width="8">
            <Header>Student views</Header>
            <p>
              Seeing what other students have said about different courses can
              help you make a decision. You can find students' views on things
              like teaching quality, assessment and feeback and student support.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>
);

export default withLayout(IndexPage);

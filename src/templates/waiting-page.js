import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

import UserAccordion from "../components/UserAccordion";
import Overview from "../components/Overview";
import Resource from "../components/Resource";

import "bootstrap/dist/css/bootstrap.min.css";
class WaitingPageTemplate extends React.Component {
  render() {
    return (
      <>
        <Resource
          path="/api/example.json"
          render={(data) => {
            return <UserAccordion />;
          }}
        />
        <Overview />
      </>
    );
  }
}

const WaitingPage = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <WaitingPageTemplate />
    </Layout>
  );
};

WaitingPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default WaitingPage;

export const waitingPageQuery = graphql`
  query WaitingPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

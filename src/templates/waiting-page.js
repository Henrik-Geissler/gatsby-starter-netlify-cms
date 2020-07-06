import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

import Feed from "../components/Feed";
import Overview from "../components/Overview";
import ResourceContainer from "../components/ResourceContainer";

import "bootstrap/dist/css/bootstrap.min.css";
class WaitingPageTemplate extends React.Component {
  render() {
    return (
      <>
        <ResourceContainer
          path="/api/example.json"
          render={(data) => {
            return <Feed />;
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

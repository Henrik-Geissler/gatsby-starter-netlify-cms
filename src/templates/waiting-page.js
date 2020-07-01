import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import UserAccordion from '../components/UserAccordion'
import { user } from '../ajax/user'

export const WaitingPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content
  return <UserAccordion user={user} />
}

WaitingPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const WaitingPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <WaitingPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

WaitingPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default WaitingPage

export const waitingPageQuery = graphql`
  query WaitingPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`

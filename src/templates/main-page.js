import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import Content, {HTMLContent} from '../components/Content'
import Gallery from 'react-photo-gallery'
import {photos} from './photos'

export const MainPageTemplate = ({title, content, contentComponent}) => {
  const PageContent = contentComponent || Content
  const BasicRows = () => <Gallery photos={photos} direction={'column'} />

  return <BasicRows />
}

MainPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const MainPage = ({data}) => {
  const {markdownRemark: post} = data

  return (
    <Layout>
      <MainPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

MainPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default MainPage

export const mainPageQuery = graphql`
  query MainPage($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        title
      }
    }
  }
`

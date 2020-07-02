import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import UserAccordion from '../components/UserAccordion'
import Overview from '../components/Overview'
import 'bootstrap/dist/css/bootstrap.min.css'
class WaitingPageTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      user: [],
    }
  }

  componentDidMount() {
    fetch('/ajaxExample/ExampleResultUser.json')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            user: result.user,
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          })
        }
      )
  }

  render() {
    const { error, isLoaded, user } = this.state
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div>
          <Overview />
          <UserAccordion user={user} />
        </div>
      )
    }
  }
}

const WaitingPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <WaitingPageTemplate />
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

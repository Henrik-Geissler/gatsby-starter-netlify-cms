import React, { Fragment } from 'react'
import Feed from '../components/Feed'
import ResourceContainer from '../components/ResourceContainer'

const Home = () => (
  <ResourceContainer
    path='/api/example.json'
    render={data => {
      return <Feed />
    }}
  />
)

export default Home

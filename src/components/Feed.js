import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import ResourceContext from './ResourceContext'
import FeedHeader from './FeedHeader'
import FeedBody from './FeedBody'
import CardContext from './CardContext'

const Feed = () => {
  return (
    <Accordion defaultActiveKey="0">
      <ResourceContext.Consumer>
        {(data) => (
          <>
            {data.user.map((user, index) => (
              <Card>
                <CardContext.Provider value={user}>
                  <FeedHeader user={user} index={index} />
                  <FeedBody
                    user={user}
                    index={index}
                    supporter={data.supporter}
                  />
                </CardContext.Provider>
              </Card>
            ))}
          </>
        )}
      </ResourceContext.Consumer>
    </Accordion>
  )
}

export default Feed

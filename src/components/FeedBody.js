import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import UserInformation from './UserInformation'
const FeedBody = ({ user, index, supporter }) => {
  return (
    <Accordion.Collapse eventKey={index}>
      <Card.Body>
        <UserInformation
          information={user.information}
          interactions={user.interactions}
          supporter={supporter}
        />
      </Card.Body>
    </Accordion.Collapse>
  )
}

export default FeedBody

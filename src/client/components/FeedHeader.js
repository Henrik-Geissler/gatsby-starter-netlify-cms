import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'

const FeedHeader = ({ user, index }) => {
  return (
    <Accordion.Toggle as={Card.Header} eventKey={index}>
      <Badge variant='secondary'>{user.information.state}</Badge>
      {user.information.name} {user.information.course_date}
      kontaktiert vor 2 Tagen
    </Accordion.Toggle>
  )
}

export default FeedHeader

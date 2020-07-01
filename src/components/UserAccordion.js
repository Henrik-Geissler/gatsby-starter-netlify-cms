
import React from 'react'
import PropTypes from 'prop-types'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

const UserAccordion = ({user}) => (
    <Accordion defaultActiveKey="0">
        {user.map((user,index) => (
            <Card>
            <Accordion.Toggle as={Card.Header} eventKey={index}>
                name:{user.name}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={index}>
                <Card.Body>Hello!{index} I'm the body {user.author}</Card.Body>
            </Accordion.Collapse>
            </Card>
        ))}
    </Accordion>
)

UserAccordion.propTypes = {
  user: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      author: PropTypes.string,
    })
  ),
}

export default UserAccordion

import React from 'react'
import PropTypes from 'prop-types'

const UserAccordion = ({user}) => (
    <Accordion defaultActiveKey="0">
        {user.map(user => (
            <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
                name:{user.name}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
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
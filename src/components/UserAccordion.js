import React from 'react'
import PropTypes from 'prop-types'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

const UserAccordion = ({ user }) => (
  <Accordion defaultActiveKey="0">
    {user.map((user, index) => (
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={index}>
          {user.name} {user.state}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={index}>
          <Card.Body>
              {user.tel} {user.mail} {user.date}
          </Card.Body>
          {user.map((interaction =user.interactions) => (
            <Card>{interaction.supporter} {interaction.outcome} {interaction.text}</Card>
          ))}
        </Accordion.Collapse>
      </Card>
    ))}
  </Accordion>
)

UserAccordion.propTypes = {
  user: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      tel: PropTypes.string,
      mail: PropTypes.string,
      date: PropTypes.string,
      state: PropTypes.string,
      interactions: PropTypes.arrayOf(
          PropTypes.shape({
            supporter: PropTypes.string,
            timestamp: PropTypes.string,
            outcome: PropTypes.string,
            text: PropTypes.string,
          })
      )
    })
  ),
}

export default UserAccordion

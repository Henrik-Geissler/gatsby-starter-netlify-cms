import React from 'react'
import PropTypes from 'prop-types'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import UserInteraction from './UserInteraction'
import { FaPhone } from 'react-icons/fa';

const UserAccordion = ({ user }) => (
  <Accordion defaultActiveKey="0">
    {user.map((user, index) => (
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={index}>
          {user.name} <Badge variant="secondary">{user.state}</Badge>
          {user.date} <Badge variant="info">Info</Badge>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={index}>
          <Card.Body>
          <OverlayTrigger key="top" placement="top" overlay={
            <Popover>
              <Popover.Title as="h3">{user.name}</Popover.Title>
              <Popover.Content>
                Telefon: <strong>{user.tel}</strong>
              </Popover.Content>
          </Popover>
          }>
            <Button variant="secondary">
              <FaPhone />
            </Button>
          </OverlayTrigger>
              {user.mail} 
          <UserInteraction interactions={user.interactions}/>
          </Card.Body>
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

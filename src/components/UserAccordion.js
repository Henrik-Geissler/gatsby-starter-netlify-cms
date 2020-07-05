import React,{useContext} from 'react'
import PropTypes from 'prop-types'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import UserInformation from './UserInformation'

const UserAccordion = ({ items }) => (
  <Accordion defaultActiveKey="0">
    {items.user.map((user, index) => (
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={index}>
          {user.information.name} <Badge variant="secondary">{user.information.state}</Badge>
          {user.information.course_date} <Badge variant="info">{user.information.supporter}</Badge>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={index}>
          <Card.Body>
            <UserInformation information={user.information} interactions={user.interactions} supporter={items.supporter}/>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    ))}
  </Accordion>
)

UserAccordion.propTypes = {
  supporter: PropTypes.string,
  user: PropTypes.arrayOf(
    PropTypes.shape({
      information: PropTypes.shape({
        name: PropTypes.string,
        tel: PropTypes.string,
        mail: PropTypes.string,
        course_date: PropTypes.string,
        course: PropTypes.string,
        state: PropTypes.string,
        supporter: PropTypes.string,
      }),
      interactions: PropTypes.arrayOf(
        PropTypes.shape({
          supporter: PropTypes.string,
          timestamp: PropTypes.string,
          outcome: PropTypes.string,
          text: PropTypes.string,
        })
      ),
    })
  ),
}

export default UserAccordion

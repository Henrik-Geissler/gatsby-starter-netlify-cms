import React from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import ListGroup from 'react-bootstrap/Listgroup'

function UserAction({ children,  title, content }) {
  return (
    <OverlayTrigger
  placement="top"
  overlay={
    <Popover>
      <Popover.Title as="h3">{title}</Popover.Title>
      <Popover.Content>
        {content}
      </Popover.Content>
    </Popover>
  }
>
{children}
</OverlayTrigger>
  );
}

const UserInteractions = ({ interactions , buttonsActive}) => (
  <>
    <UserAction title="" content="">
      <Button variant="success">
      Teilnahme bestätigt
      </Button>
    </UserAction>
    <UserAction title="" content="">
      <Button variant="danger">
      Absage und Storno
      </Button>
    </UserAction>
    <UserAction title="" content="">
      <Button variant="warning">
      Kontaktaufnahme gescheitert
      </Button>
    </UserAction>
    <UserAction title="" content="">    
    <Button variant="primary">
              Umbuchen
              </Button>
    </UserAction>
    <UserAction title="" content="">
    <Button variant="info">
              Kann sich nicht entscheiden
              </Button>
    </UserAction>
    </>
)

UserInteractions.propTypes = {
  interactions: PropTypes.arrayOf(
    PropTypes.shape({
      supporter: PropTypes.string,
      timestamp: PropTypes.string,
      outcome: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default UserInteractions

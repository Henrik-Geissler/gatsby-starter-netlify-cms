import React from 'react'
import OverlayTrigger, {
  OverlayTriggerType,
} from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
function Hover(props) {
  return (
    <OverlayTrigger
      placement="top"
      overlay={
        <Popover>
          <Popover.Title as="h3">{props.title}</Popover.Title>
          <Popover.Content>{props.description}</Popover.Content>
        </Popover>
      }
    >
      {props.children}
    </OverlayTrigger>
  )
}

export default Hover

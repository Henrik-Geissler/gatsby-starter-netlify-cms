import React from 'react'
import ActionBar from './ActionBar'
import Hover from './Hover'
import Button from 'react-bootstrap/Button'
function ActionBarContainer(props) {
  if (props.information.supporter === props.supporter) {
    return <ActionBar />
  } else {
    return (
      <>
        <Hover title="PopUpTitle" description="PopUpDescription">
          <Button variant="primary" onClick={() => setOpen(true)}>
            Mir zuweisen
          </Button>
        </Hover>
      </>
    )
  }
}

export default ActionBarContainer

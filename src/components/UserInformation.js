import React, { useState } from 'react'
import Hover from './Hover'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import { FaPhone } from 'react-icons/fa'
import Collapse from 'react-bootstrap/Collapse'
import ActionBarContainer from './ActionBarContainer'
import Action from './Action'

function UserInformation({ information, interactions, supporter }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Alert variant="secondary">
        <Hover
          title={information.name}
          description={'Telefon: <strong>' + information.tel + '</strong>'}
        >
          <Button variant="secondary">
            <FaPhone />
          </Button>
        </Hover>
        {information.mail}
        {information.course}
        <strong>{interactions.length}</strong> Interaktionen
        <Action variant="info" title="Protokoll" description="soso">
          {interactions.map((interactions) => (
            <dl class="row mb-0">
              <dt class="col-sm-3">
                {interactions.timestamp} : {interactions.outcome}
              </dt>
              <dd class="col-sm-9">
                <dl class="row mb-0">
                  <dt class="col-sm-4">{interactions.supporter}</dt>
                  <dd class="col-sm-8">{interactions.text}</dd>
                </dl>
              </dd>
            </dl>
          ))}
        </Action>
      </Alert>
      <ActionBarContainer information={information} supporter={supporter} />
    </>
  )
}

export default UserInformation

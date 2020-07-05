import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import { FaPhone } from 'react-icons/fa'
import Modal from 'react-bootstrap/Modal'
import Collapse from 'react-bootstrap/Collapse'
import UserInteraction from './UserInteraction'
function Example({ interactions }) {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <Button className="float-right" variant="secondary" onClick={handleShow}>
        Protokoll anzeigen
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Interaktions Protokoll</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

function UserInformation ({ information, interactions, supporter }) {
  const [open, setOpen] = useState(false);
  return (
    <>
  <Alert variant="secondary">
  <OverlayTrigger
      key="top"
      placement="top"
      overlay={
        <Popover>
          <Popover.Title as="h3">jajaja</Popover.Title>
          <Popover.Content>
            Telefon: <strong>test</strong>
          </Popover.Content>
        </Popover>
      }
    >
      <Button variant="primary"
        onClick={() => setOpen(true)}
        aria-controls="collapseThis"
        aria-expanded={open}
        >
      Mir zuweisen
      </Button>
    </OverlayTrigger>
            <OverlayTrigger
              key="top"
              placement="top"
              overlay={
                <Popover>
                  <Popover.Title as="h3">{information.name}</Popover.Title>
                  <Popover.Content>
                    Telefon: <strong>{information.tel}</strong>
                  </Popover.Content>
                </Popover>
              }
            >
              <Button variant="secondary">
                <FaPhone />
              </Button>
            </OverlayTrigger>
            {information.mail}
            {information.course}

      <strong>{interactions.length}</strong> Interaktionen{' '}
      <Example interactions={interactions} />
            </Alert>
      <Collapse in={open||information.supporter===supporter}>
        <div  id="collapseThis">
            <UserInteraction interactions={interactions}/>
        </div>
      </Collapse>
      </>
  )
            }

UserInformation.propTypes = {
  supporter:PropTypes.string,
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

export default UserInformation

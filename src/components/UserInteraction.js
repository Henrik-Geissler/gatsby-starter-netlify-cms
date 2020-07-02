import React, { useState }  from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
function Example({ interactions }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className="float-right" variant="primary" onClick={handleShow}>
        Protokoll anzeigen
      </Button>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Interaktions Protokoll</Modal.Title>
        </Modal.Header>
        <Modal.Body>
    {interactions.map(interactions => (
      <dl class="row mb-0">     
      <dt class="col-sm-3">{interactions.timestamp} : {interactions.outcome}</dt>
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
  );
}
const UserInteractions = ({ interactions }) => (
  <Card>
  <Alert variant="secondary">
    <strong>{interactions.length}</strong> Interaktionen {' '}
    <Example interactions={interactions}/>
    </Alert>
    </Card>
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

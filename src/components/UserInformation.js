import React, { useState } from "react";
import Hover from "./Hover";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { FaPhone } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import Collapse from "react-bootstrap/Collapse";
import UserInteraction from "./UserInteraction";
import Popover from "react-bootstrap/Popover";
function Example({ interactions }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
  );
}

function UserInformation({ information, interactions, supporter }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Alert variant="secondary">
        <Hover title="PopUpTitle" description="PopUpDescription">
          <Button
            variant="primary"
            onClick={() => setOpen(true)}
            aria-controls="collapseThis"
            aria-expanded={open}
          >
            Mir zuweisen
          </Button>
        </Hover>
        <Hover
          title={information.name}
          description={"Telefon: <strong>" + information.tel + "</strong>"}
        >
          <Button variant="secondary">
            <FaPhone />
          </Button>
        </Hover>
        {information.mail}
        {information.course}
        <strong>{interactions.length}</strong> Interaktionen{" "}
        <Example interactions={interactions} />
      </Alert>

      <Collapse in={open || information.supporter === supporter}>
        <div id="collapseThis">
          <UserInteraction interactions={interactions} />
        </div>
      </Collapse>
    </>
  );
}

export default UserInformation;

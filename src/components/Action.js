import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import Hover from "./Hover";
import CardContext from "./CardContext";

function Action(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCall = () => setShow(false);
  return (
    <>
      <Hover title={props.title} description={props.description}>
        <Button variant={props.variant} onClick={handleShow}>
          {props.title}
        </Button>
      </Hover>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <Alert variant={props.variant}>{props.title}</Alert>
            {"  -  "}
            <CardContext.Consumer>
              {(user) => <>{user.information.name}</>}
            </CardContext.Consumer>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Abbrechen
          </Button>
          <Button variant="primary" onClick={handleCall}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Action;

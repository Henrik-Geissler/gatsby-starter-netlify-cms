import React from "react";
import Form from "react-bootstrap/Form";
import Action from "./Action";

function ActionForm(props) {
  return (
    <>
      <Action {...props}>
        {props.children}
        <Form>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Bemerkung</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
        </Form>
      </Action>
    </>
  );
}

export default ActionForm;

import React from "react";
import Button from "react-bootstrap/Button";
import Hover from "./Hover";
const UserInteractions = ({ interactions, buttonsActive }) => (
  <>
    <Hover title="Poptitle" description="Poptext">
      <Button variant="success">Teilnahme bestätigt</Button>
    </Hover>
    <Hover title="Poptitle" description="Poptext">
      <Button variant="danger">Absage und Storno</Button>
    </Hover>
    <Hover title="Poptitle" description="Poptext">
      <Button variant="warning">Kontaktaufnahme gescheitert</Button>
    </Hover>
    <Hover title="Poptitle" description="Poptext">
      <Button variant="primary">Umbuchen</Button>
    </Hover>
    <Hover title="Poptitle" description="Poptext">
      <Button variant="info">Kann sich nicht entscheiden</Button>
    </Hover>
  </>
);

export default UserInteractions;

import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

const FeedHeader = ({ user, index }) => {
  return (
    <Accordion.Toggle as={Card.Header} eventKey={index}>
      {user.information.name}{" "}
      <Badge variant="secondary">{user.information.state}</Badge>
      {user.information.course_date}{" "}
      <Badge variant="info">{user.information.supporter}</Badge>
    </Accordion.Toggle>
  );
};

export default FeedHeader;

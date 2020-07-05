import React from "react";
import PropTypes from "prop-types";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import UserInformation from "./UserInformation";
import ResourceContext from "./ResourceContext";

class UserAccordion extends React.Component {
  render() {
    return (
      <Accordion defaultActiveKey="0">
        <ResourceContext.Consumer>
          {(data) => (
            <>
              {data.user.map((user, index) => (
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey={index}>
                    {user.information.name}{" "}
                    <Badge variant="secondary">{user.information.state}</Badge>
                    {user.information.course_date}{" "}
                    <Badge variant="info">{user.information.supporter}</Badge>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={index}>
                    <Card.Body>
                      <UserInformation
                        information={user.information}
                        interactions={user.interactions}
                        supporter={data.supporter}
                      />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              ))}
            </>
          )}
        </ResourceContext.Consumer>
      </Accordion>
    );
  }
}

UserAccordion.propTypes = {
  supporter: PropTypes.string,
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
};

export default UserAccordion;

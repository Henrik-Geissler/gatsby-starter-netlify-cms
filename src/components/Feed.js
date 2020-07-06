import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ResourceContext from "./ResourceContext";
import FeedHeader from "./FeedHeader";
import FeedBody from "./FeedBody";

const Feed = () => {
  return (
    <Accordion defaultActiveKey="0">
      <ResourceContext.Consumer>
        {(data) => (
          <>
            {data.user.map((user, index) => (
              <Card>
                <FeedHeader user={user} index={index} />
                <FeedBody
                  user={user}
                  index={index}
                  supporter={data.supporter}
                />
              </Card>
            ))}
          </>
        )}
      </ResourceContext.Consumer>
    </Accordion>
  );
};

export default Feed;

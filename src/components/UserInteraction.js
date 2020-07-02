import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'

const UserInteractions = ({ interactions }) => (
  <div>
    {interactions.map((interactions, index) => (
      <Card>
          {interactions.supporter} {interactions.outcome} {interactions.text}
      </Card>
    ))}
  </div>
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

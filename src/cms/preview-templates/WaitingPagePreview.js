import React from 'react'
import PropTypes from 'prop-types'

const WaitingPagePreview = ({ entry, widgetFor }) => <></>

WaitingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default WaitingPagePreview

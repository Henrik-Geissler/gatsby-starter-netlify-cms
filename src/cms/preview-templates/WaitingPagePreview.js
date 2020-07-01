import React from 'react'
import PropTypes from 'prop-types'
import { WaitingPageTemplate } from '../../templates/waiting-page'

const WaitingPagePreview = ({ entry, widgetFor }) => (
  <WaitingPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

WaitingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default WaitingPagePreview

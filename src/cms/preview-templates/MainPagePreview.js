import React from 'react'
import PropTypes from 'prop-types'
import {MainPageTemplate} from '../../templates/main-page'

const MainPagePreview = ({entry, widgetFor}) => (
  <MainPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

MainPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default MainPagePreview

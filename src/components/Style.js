import React from 'react'

import '../all.sass'
import 'bootstrap/dist/css/bootstrap.min.css'

import initFontAwesome from '../../utils/initFontAwesome'
initFontAwesome()
const Style = (props) => {
  return <div>{props.children}</div>
}

export default Style

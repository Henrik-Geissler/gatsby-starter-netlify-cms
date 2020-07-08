import React from 'react'
import PropTypes from 'prop-types'
import AppRoutes from '../AppRoutes/AppRoutes'
import { Auth0Provider } from '@auth0/auth0-react'
import config from '../../../../config/auth_config.json'
import history from '../../../utils/history'

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo ? appState.returnTo : window.location.pathname
  )
}
const Auth = () => {
  return (
    <Auth0Provider
      domain={config.domain}
      clientId={config.clientId}
      audience={config.audience}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <AppRoutes />
    </Auth0Provider>
  )
}
Auth.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Auth

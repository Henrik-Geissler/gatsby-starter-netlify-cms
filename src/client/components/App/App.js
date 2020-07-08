import React from 'react'

import Loading from '../Loading'
import AppRoutes from './AppRoutes/AppRoutes'
import Meta from './Meta/Meta'
import { useAuth0 } from '@auth0/auth0-react'

import initFontAwesome from '../../utils/initFontAwesome'
initFontAwesome()

const App = () => {
  const { isLoading, error } = useAuth0()

  if (error) {
    return <div>Oops... {error.message}</div>
  }

  if (isLoading) {
    return <Loading />
  }
  return (
    <>
      <Meta />
      <AppRoutes />
    </>
  )
}

export default App

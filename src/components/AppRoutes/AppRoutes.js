import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { Container } from 'reactstrap'
import NavBar from '../NavBar'
import Footer from '../Footer'
import Home from '../../pages/Home'
import Profile from '../../pages/Profile'
import ExternalApi from '../../pages/ExternalApi'
import history from '../../utils/history'
import Overview from '../Overview'

import 'bootstrap/dist/css/bootstrap.min.css'

const AppRoutes = () => {
  return (
    <Router history={history}>
      <NavBar />
      <Container className="flex-grow-1 mt-5">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/external-api" component={ExternalApi} />
        </Switch>
      </Container>
      <Overview />
      <Footer />
    </Router>
  )
}

export default AppRoutes

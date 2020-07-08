import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { Link } from 'gatsby'

const Nav = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: true,
    }
  }

  render() {
    return (
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='/'>Burger</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Navbar className='mr-auto'>
            <Link href='/'>Meine Kunden</Link>
            <Link href='/'>Wartende Kunden</Link>
          </Navbar>
          <Form inline>
            <FormControl
              type='text'
              placeholder='Name/Tel'
              className='mr-sm-2'
            />
            <Button variant='outline-success'>Suchen</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Nav

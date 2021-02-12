import React from 'react'

import { connect } from 'react-redux'

import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

import { changePage, setName } from '../actions'

const Navigation = ({ dispatch }) => {
    function dropdownHandler(e) {
        e.preventDefault()

        dispatch(setName(e.target.id))
        dispatch(changePage(e.target.id))
    }
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">NZ Prophet</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link id='Home' onClick={e => dropdownHandler(e)}>Home</Nav.Link>
                    <NavDropdown title="Currencies" id="basic-nav-dropdown">
                        <NavDropdown.Item id='ALGO' onClick={e => dropdownHandler(e)}>Algorand</NavDropdown.Item>
                        <NavDropdown.Item id='ADA' onClick={e => dropdownHandler(e)}>Cardano</NavDropdown.Item>
                        <NavDropdown.Item id='DOGE' onClick={e => dropdownHandler(e)}>Dogecoin</NavDropdown.Item>
                        <NavDropdown.Item id='LTC' onClick={e => dropdownHandler(e)}>Litecoin</NavDropdown.Item>
                        <NavDropdown.Item id='XRP' onClick={e => dropdownHandler(e)}>Ripple</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form> */}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default connect()(Navigation)
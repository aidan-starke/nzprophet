import React from 'react'

import { connect } from 'react-redux'

import { Nav, Navbar } from 'react-bootstrap'

import { changePage } from '../actions'

import UserDropdown from './UserDropdown'

const Navigation = ({ dispatch }) => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand id='Home' onClick={e => dispatch(changePage(e.target.id))}>NZ Prophet</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <UserDropdown />
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default connect()(Navigation)
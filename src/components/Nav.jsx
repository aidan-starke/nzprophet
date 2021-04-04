import React from 'react'

import { connect } from 'react-redux'

import { Navbar } from 'react-bootstrap'

import { changePage } from '../actions'


const Navigation = ({ dispatch }) => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand id='Home' onClick={e => dispatch(changePage(e.target.id))}>NZ Prophet</Navbar.Brand>
        </Navbar>
    )
}

export default connect()(Navigation)
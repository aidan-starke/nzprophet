import React, { useEffect, useState } from 'react'

import { connect } from 'react-redux'

import { NavDropdown } from 'react-bootstrap'

import { getUsers, getCrypto } from '../api'

import { changePage, setUser, setUsersCrypto, refresh } from '../actions'

const UserDropdown = ({ dispatch }) => {
    const [usernames, setUsernames] = useState([])

    useEffect(() => {
        getUsers()
            .then(users => {
                setUsernames(users)
            })
    }, [])

    function selectUser(e) {
        e.preventDefault()

        dispatch(refresh())

        getCrypto(e.target.id)
            .then(res => {
                dispatch(setUsersCrypto(res))
                dispatch(setUser(e.target.id))
                dispatch(changePage(e.target.id))
            })
    }

    return (
        <NavDropdown title="Users" id="basic-nav-dropdown">
            {usernames.map((user, i) =>
                <NavDropdown.Item key={i} id={user.name} onClick={e => selectUser(e)}>
                    {user.name}
                </NavDropdown.Item>
            )}
        </NavDropdown>
    )
}

export default connect()(UserDropdown)
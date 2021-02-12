import React from 'react'

import { Button, Row } from 'react-bootstrap'

import { connect } from 'react-redux'

import { refresh } from '../actions'

const RefreshButton = ({ dispatch }) => {

    return (
        <Row className="d-flex justify-content-center" >
            <Button onClick={() => dispatch(refresh())}>Refresh</Button>
        </Row>
    )
}

export default connect()(RefreshButton)
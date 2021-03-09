import React from 'react'

import { connect } from 'react-redux'

import { Card } from 'react-bootstrap'

function Transactions({ crypto }) {
    const { transactions } = crypto
    return (
        <Card>
            <Card.Text>{transactions}</Card.Text>
        </Card>
    )
}

function MapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(MapStateToProps)(Transactions)
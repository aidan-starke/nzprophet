import React from 'react'

import { Card } from 'react-bootstrap'

const Transaction = ({ transactionData }) => {
    const { cryptoSent, coinsSent, cryptoReceived, coinsReceived, timestamp } = transactionData
    return (
        <Card style={{ flex: 1, width: '15rem' }}>
            <Card.Header className="text-center">{timestamp}</Card.Header>
            <Card.Body>
                <Card.Text>You sent {coinsSent} {cryptoSent}</Card.Text>
                <Card.Text>You received {coinsReceived} {cryptoReceived}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Transaction
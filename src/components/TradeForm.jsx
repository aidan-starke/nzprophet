import React, { useState } from 'react'

import { Card, Button, Form } from 'react-bootstrap'

import { addTrade, addTradeNewCoin, getPrice } from '../api'

const TradeForm = ({ user, usersCrypto }) => {
    const [cryptoSent, selectCryptoSent] = useState('')
    const [coinsSent, setCoinsSent] = useState('')
    const [cryptoReceived, selectCryptoReceived] = useState('')
    const [coinsReceived, setCoinsReceived] = useState('')
    const [other, selectOther] = useState(false)

    function submitTrade(e) {
        e.preventDefault()

        const coinsSentValue = getPrice(cryptoSent) * coinsSent
        const coinsReceivedValue = getPrice(cryptoReceived) * coinsReceived

        const tradeData = { user, cryptoSent, coinsSent, cryptoReceived, coinsReceived, coinsSentValue, coinsReceivedValue }

        if (other) addTradeNewCoin(tradeData)

        else addTrade(tradeData)
    }

    return (
        <Card className="justify-content-center" width="50rem">
            <Card.Header align="center">New Trade?</Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Crypto Sent</Form.Label>
                        <Form.Control as="select" >
                            {usersCrypto.map(crypto => <option id={crypto.name} onClick={e => selectCryptoSent(e.target.id)}>{crypto.name}</option>)}
                        </Form.Control>
                    </Form.Group>

                    {cryptoSent !== '' && <Form.Group>
                        <Form.Label>Coins Sent</Form.Label>
                        <Form.Control as="input" value={coinsSent} onChange={e => setCoinsSent(e.target.value)} />
                    </Form.Group>}

                    <Form.Group>
                        <Form.Label>Crypto Received</Form.Label>
                        <Form.Control as="select" >
                            {usersCrypto.map(crypto => <option id={crypto.name} onClick={e => selectCryptoReceived(e.target.id)}>{crypto.name}</option>)}
                            <option onClick={() => selectOther(true)}>Other</option>
                        </Form.Control>
                    </Form.Group>

                    {other && <Form.Group>
                        <Form.Label>Enter Crypto Received</Form.Label>
                        <Form.Control as="input" value={cryptoReceived} onChange={e => selectCryptoReceived(e.target.value)} />
                    </Form.Group>}

                    {cryptoReceived !== '' && <Form.Group>
                        <Form.Label>Coins Received</Form.Label>
                        <Form.Control as="input" value={coinsReceived} onChange={e => setCoinsReceived(e.target.value)} />
                    </Form.Group>}

                    <Button variant="primary" type="submit" align="center" onClick={e => submitTrade(e)}>
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default TradeForm
import React, { useState } from 'react'

import { Card, Button, Form } from 'react-bootstrap'

import { connect } from 'react-redux'

import { addBuy } from '../api'

import { refresh, changePage } from '../actions'

const TradeForm = ({ user, usersCrypto, dispatch }) => {
    const [cryptoBought, selectCryptoBought] = useState('')
    const [coinsBought, setCoinsBought] = useState('')
    const [invested, setInvestment] = useState('')
    const [other, selectOther] = useState(false)

    function submitTrade(e) {
        e.preventDefault()

        const tradeData = { user, cryptoBought, coinsBought, invested }

        addBuy(tradeData)

        dispatch(refresh())
        dispatch(changePage(user))
    }

    return (
        <Card className="justify-content-center" width="50rem">
            <Card.Header align="center">Bought some coins?</Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Crypto Bought</Form.Label>
                        <Form.Control as="select" >
                            {usersCrypto.map((crypto, i) => <option key={i} id={crypto.name} onClick={e => selectCryptoBought(e.target.id)}>{crypto.name}</option>)}
                            <option onClick={() => selectOther(true)}>Other</option>
                        </Form.Control>
                    </Form.Group>

                    {other && <Form.Group>
                        <Form.Label>Enter Crypto Bought</Form.Label>
                        <Form.Control as="input" value={cryptoBought} onChange={e => selectCryptoBought(e.target.value)} />
                    </Form.Group>}

                    <Form.Group>
                        <Form.Label>Coins Bought</Form.Label>
                        <Form.Control as="input" value={coinsBought} onChange={e => setCoinsBought(e.target.value)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Money Invested</Form.Label>
                        <Form.Control as="input" value={invested} onChange={e => setInvestment(e.target.value)} />
                    </Form.Group>

                    <Button variant="primary" type="submit" align="center" onClick={e => submitTrade(e)}>
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default connect()(TradeForm)
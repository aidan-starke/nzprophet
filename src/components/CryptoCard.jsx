import React from 'react'

import { Button, Card, Row } from 'react-bootstrap'

import { connect } from 'react-redux'

const CryptoCard = ({ crypto }) => {
    return (
        <>
            <Row className="d-flex justify-content-center" >
                <Button onClick={() => window.location.reload(false)}>Refresh</Button>
            </Row>

            <Row className="d-flex justify-content-center cryptocard">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={crypto.img} />
                    <Card.Body>
                        <Card.Title>{crypto.name}</Card.Title>
                        <Card.Text>
                            You bought {crypto.name} at {crypto.price}, and you are sitting at $n profit.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Row>

        </>
    )
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps)(CryptoCard)
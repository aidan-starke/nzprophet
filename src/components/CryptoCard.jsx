import React from 'react'

import { connect } from 'react-redux'

import { CardDeck, Row } from 'react-bootstrap'

import Profit from './Profit'

const CryptoCard = ({ users }) => {
    return (
        <Row className="d-flex justify-content-center">
            <CardDeck style={{ display: 'flex', flexDirection: 'row' }}>
                {users.data.map((crypto, i) =>
                    <Profit crypto={crypto} key={i} />
                )}
            </CardDeck>
        </Row>
    )
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(CryptoCard)
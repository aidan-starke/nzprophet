import React from 'react'

import { connect } from 'react-redux'

import { CardDeck, Button } from 'react-bootstrap'

import Profit from './Profit'

import { changePage } from '../actions'

const CryptoCard = ({ crypto, dispatch }) => {
    return (
        <>
            <CardDeck style={{ display: 'flex', flexDirection: 'row' }}>
                {crypto.usersCrypto.map((crypto, i) =>
                    <Profit crypto={crypto} key={i} />
                )}
            </CardDeck>
            <Button variant="secondary" type="submit" onClick={() => dispatch(changePage('transactions'))}>
                New Transaction?
            </Button>
        </>
    )
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps)(CryptoCard)
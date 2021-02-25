import React from 'react'

import { connect } from 'react-redux'

import { Button, ButtonGroup } from 'react-bootstrap'

import { changePage } from '../actions'

const TransactionButtons = ({ dispatch }) => {
    function buttonHandler(e) {
        e.preventDefault()

        dispatch(changePage(e.target.id))
    }

    return (
        <ButtonGroup>
            <Button variant="secondary" type="submit" id='trade' onClick={e => buttonHandler(e)}>
                New Trade?
            </Button>
            <Button variant="secondary" type="submit" id='buy' onClick={e => buttonHandler(e)}>
                Bought more coins?
            </Button>
            <Button variant="secondary" type="submit" id='spend' onClick={e => buttonHandler(e)}>
                Spent some coins?
            </Button>
        </ButtonGroup>
    )
}

export default connect()(TransactionButtons)
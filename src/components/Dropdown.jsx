import React, { useState } from 'react'

import { Dropdown, DropdownButton, InputGroup, Row } from 'react-bootstrap'

import { connect } from 'react-redux'

import { setName, changePage } from '../actions'

const Calculator = ({ dispatch }) => {
    const [currentCrypto] = useState('Select Cryptocurrency')

    const cryptoCurrencies = ['ADA', 'ALGO', 'DOGE', 'LTC', 'XRP']

    function dropdownHandler(name) {
        dispatch(setName(name))
        dispatch(changePage(name))
    }

    return (
        <Row>
            <InputGroup className="d-flex justify-content-center">
                <DropdownButton id="dropdown-basic-button" title={currentCrypto} display='block'>
                    {cryptoCurrencies.map((crypto, i) => <Dropdown.Item key={i} onClick={evt => dropdownHandler(evt.target.innerHTML)}>{crypto}</Dropdown.Item>)}
                </DropdownButton>
            </InputGroup>
        </Row>
    )
}

export default connect()(Calculator)
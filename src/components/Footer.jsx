import React from 'react'

import { Card } from 'react-bootstrap'

const FooterComponent = () => {
    return (
        <Card.Footer>
            <Card.Text align='center'>
                Developed by Aidan Starke - <Card.Link href='https://aidan-starke.github.io/'>https://aidan-starke.github.io/</Card.Link>
            </Card.Text>
            <Card.Text align='center' className="text-muted">
                Images from <Card.Link href='https://cryptologos.cc/'>https://cryptologos.cc/</Card.Link>
            </Card.Text>
        </Card.Footer>
    )
}

export default FooterComponent
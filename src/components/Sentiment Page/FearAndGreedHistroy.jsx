import React from 'react'
import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';


const FearAndGreedHistory = ({ history }) => {

    if (!history.length) {
        return (
            <h4 className='text-2xl'>Historical Values</h4>
        )
    }
    

    return (
    <div className='  '>
        <Card className="cardWidth fix">
            <Card.Header className="portfolioHeader ">Historical Values</Card.Header>
                <Card.Body id="bodySize">
                    <Card.Title>Today:</Card.Title>
                    <Card.Text>
                        {history[0].value_classification}
                    </Card.Text>
                    <Card.Text>
                        {history[0].value}
                    </Card.Text>
                    <Card.Title>Yesterday:</Card.Title>
                    <Card.Text>
                        {history[1].value_classification}
                    </Card.Text>
                    <Card.Text>
                        {history[1].value}
                    </Card.Text>
                    <Card.Title>Last Week:</Card.Title>
                    <Card.Text>
                        {history[5].value_classification}
                    </Card.Text>
                    <Card.Text>
                        {history[5].value}
                    </Card.Text>

            </Card.Body>
        </Card>
    </div>
    )
}

export default FearAndGreedHistory



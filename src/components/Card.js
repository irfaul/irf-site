import React from 'react';

import { Col, Card, Button } from 'react-bootstrap';


function Cards(props) {

    return(
        <Col className='mb-3' md={4} sm={12}>
            <Card className='text-center' style={{width: 22+'rem'}}>
                <Card.Img className= 'overflow' variant='top' src={props.item.imgSrc} alt={props.item.imgSrc} />
                <Card.Body className='text-dark'>
                    <Card.Title>{props.item.title}</Card.Title>
                    <Card.Text>{props.item.subTitle}</Card.Text>
                    <Button href={props.item.link} variant='outline-info'>Visit</Button>
                </Card.Body>
            </Card>
        </Col>
    );

}

export default Cards;
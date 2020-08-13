import React from 'react';

import { Col, Card } from 'react-bootstrap';


function CardItems(props) {

    return(
        <Col className='mb-3' md={4} sm={12}>
            <Card className='text-center' style={{width: 22+'rem'}}>
                <Card.Img className= 'overflow' variant='top' src={props.item.imgSrc} alt={props.item.imgSrc} />
                <Card.ImgOverlay className='text-white my-4'>
                    <img
                        className='mb-3'
                        src={props.item.icon}
                        alt='icon'
                    />
                    <Card.Title>{props.item.title}</Card.Title>
                </Card.ImgOverlay>
            </Card>
        </Col>
    );

}

export default CardItems;
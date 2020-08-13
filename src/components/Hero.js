import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import Foto from '../assets/img/home-profil.png';

function Hero(props) {
    return (
        <Jumbotron className='bg-transparent jumbroton-fluid p-0 my-5'>
            <Container fluid={true}>
                <Row className='align-items-center'>
                    <Col className='px-5 pt-5 text-center' md={7} sm={12} >
                        {props.title && <h1 className='display-4 font-weight-bolder'>{props.title}</h1>}
                        {props.subtitle && <h2 className='font-weight-light'>{props.subtitle}</h2>}
                        {props.text && <h5 className='font-weight-light text-info'><em>{props.text}</em></h5>}
                    </Col>
                    <Col className='pt-5 px-5' md={5} sm={12}>
                        <img
                            src={Foto}
                            width='300'
                            height='300'
                            alt='Home Profil'
                        />
                    </Col>     
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;
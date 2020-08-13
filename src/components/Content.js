import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Foto from '../assets/img/foto-irfaul.jpg';
import iconlinkedin from '../assets/img/icon-linkedin.png';
import iconig from '../assets/img/icon-ig.png';
import iconemail from '../assets/img/icon-email.png';

function Content() {
    return (
        <Container fluid={true}>
            <Row className='justify-content-md-center'>

                <Col className='pb-3 pt-5 text-center' md='4'>
                    <img
                        src={Foto}
                        width='167'
                        height='216'
                        className='rounded'
                        alt='Foto Profil'
                    />
                    <Row>
                        <Col className='d-inline mt-4'>
                            <a href='https://www.linkedin.com/in/irfaulf/'><img className='p-2' src={iconlinkedin} alt='icon linkedin' /></a>
                            <a href='https://www.instagram.com/irfaulf/?hl=id'><img className='p-2' src={iconig} alt='icon ig' /></a>
                        </Col>
                    </Row>
                </Col>

                <Col className='pb-3 pt-5 px-5' md='4'>
                    <h3 className='font-weight-bolder'>I'm <span className='text-info'>Irfaul</span></h3>
                    <div className='d-inline my-3'>
                            <img className='pr-2' src={iconemail} alt='icon email' />
                            muhirfaul@gmail.com
                    </div>
                    <p className='text-justify mt-3'>Electronics Engineering graduate interested in programming especially User Interfaces / Front End.
                        Have a good leadership and great team work. Creative and keep learning to be the basis for me to move forward
                        be a professional web developer.
                    </p>
                </Col>

            </Row>
        </Container>
    );
}

export default Content;
import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';

function Skill() {
    return(
        <section className="page-section">
            <Container>
                <Row>
                    <Col className="text-center" lg='12'>
                        <h2 className="section-heading">Skills</h2>
                        <h3 className="section-subheading text-muted">Contain softskill and hardskill</h3>
                    </Col>
                </Row>  
                <Row className='justify-content-md-center'>
                    <Col className='text-center' md='2'>
                        <p>HTML and CSS</p>
                    </Col>
                    <Col className='text-center pt-2 px-4' md='4'>
                        <ProgressBar striped variant='info' now={80} label={`${80}%`} />
                    </Col>
                </Row>
                <Row className='justify-content-md-center'>
                    <Col className='text-center' md='2'>
                        <p>Javascript</p>
                    </Col>
                    <Col className='text-center pt-2 px-4' md='4'>
                        <ProgressBar striped variant='info' now={75} label={`${75}%`} />
                    </Col>
                </Row>
                <Row className='justify-content-md-center'>
                    <Col className='text-center' md='2'>
                        <p>React Js</p>
                    </Col>
                    <Col className='text-center pt-2 px-4' md='4'>
                        <ProgressBar striped variant='info' now={75} label={`${75}%`} />
                    </Col>
                </Row>
                <Row className='justify-content-md-center'>
                    <Col className='text-center' md='2'>
                        <p>UI/UX Design</p>
                    </Col>
                    <Col className='text-center pt-2 px-4' md='4'>
                        <ProgressBar striped variant='info' now={70} label={`${70}%`} />
                    </Col>
                </Row>
                <Row className='justify-content-md-center'>
                    <Col className='text-center' md='2'>
                        <p>Graphic Design</p>
                    </Col>
                    <Col className='text-center pt-2 px-4' md='4'>
                        <ProgressBar striped variant='info' now={80} label={`${80}%`} />
                    </Col>
                </Row>
                <Row className='justify-content-md-center'>
                    <Col className='text-center' md='2'>
                        <p>Leadership</p>
                    </Col>
                    <Col className='text-center pt-2 px-4' md='4'>
                        <ProgressBar striped variant='info' now={80} label={`${80}%`} />
                    </Col>
                </Row>
                <Row className='justify-content-md-center'>
                    <Col className='text-center' md='2'>
                        <p>Team Work</p>
                    </Col>
                    <Col className='text-center pt-2 px-4' md='4'>
                        <ProgressBar striped variant='info' now={85} label={`${85}%`} />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Skill;
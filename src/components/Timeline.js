import React from 'react';
import ugm from '../assets/img/ugm.jpg';
import pens from '../assets/img/pens.jpg';
import dicoding from '../assets/img/dicoding.jpg';
import { Container, Row, Col } from 'react-bootstrap';

function Timeline() {
    return(
        <section className="bg-light page-section">
            <Container>
                <Row>
                    <Col className="text-center" lg='12'>
                        <h2 className="section-heading">Study Background</h2>
                        <h3 className="section-subheading text-muted">Formal education and Academy background</h3>
                    </Col>
                </Row>
                <Row>
                    <Col lg='12'>
                        <ul className="timeline">
                            <li>
                                <div className="timeline-image">
                                    <img className="rounded-circle img-fluid" src={ugm} alt=""/>
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>2014-2017</h4>
                                        <h4 className="subheading">Gadjah Mada University</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p className="text-muted">Electronics and Instrumentation (Diploma Degree / A.Md), Electrical and Informatics Engineering Department, Vocational School</p>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-inverted">
                                <div className="timeline-image">
                                    <img className="rounded-circle img-fluid" src={pens} alt=""/>
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>2017-2020</h4>
                                        <h4 className="subheading">Electronics Engineering Polytechnic Institute of Surabaya (PENS)</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p className="text-muted">Electronics Engineering (Bachelor of Applied Engineering Degree / S.Tr.T), Electrical Engineering Department</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="timeline-image">
                                    <img className="rounded-circle img-fluid" src={dicoding} alt=""/>
                                </div>
                                <div className="timeline-panel">
                                    <div className="timeline-heading">
                                        <h4>2020-Now</h4>
                                        <h4 className="subheading">Dicoding Academy</h4>
                                    </div>
                                    <div className="timeline-body">
                                        <p className="text-muted">Basics and Fundamental Front End Web Developer (HTML, CSS, Js), Progressive Web Apps (PWA), S.O.L.I.D programming</p>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-inverted">
                                <div className="timeline-image">
                                    <h4>Keep
                                    <br/>Learning!</h4>
                                </div>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Timeline;
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import { Container } from 'react-bootstrap';

function HomePage(props) {
    return (
        <Container>
            <Hero title={props.title} subtitle={props.subtitle} text={props.text} />
            <Services />
        </Container>
    );
}

export default HomePage;
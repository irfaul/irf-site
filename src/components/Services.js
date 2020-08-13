import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';

import CardItems from '../components/CardItems';

import icondesign from '../assets/img/icon-design.png';
import icondev from '../assets/img/icon-dev.png';
import iconpwa from '../assets/img/icon-pwa.png';

import pictdesign from '../assets/img/img-design.png';
import pictdev from '../assets/img/img-dev.png';
import pictpwa from '../assets/img/img-pwa.png';

class Services extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {   
                    id: 0,
                    title: 'Web Design',
                    icon: icondesign,
                    imgSrc: pictdesign
                },
                {
                    id: 1,
                    title: 'Web Development',
                    icon: icondev,
                    imgSrc: pictdev
                },
                {
                    id: 2,
                    title: 'Build PWA',
                    icon: iconpwa,
                    imgSrc: pictpwa
                },
            ]
        }
    }

    makeItems = (items) => {
        return items.map(item => {
            return <CardItems item={item} key={item.id}/>
        })
    }


    render() {
        return(
            <Container fluid={true} className="d-flex justify-content-center">
                <Row className='mt-5'>
                    <Col className="text-center my-5" lg='12'>
                        <h2 className="section-heading">Services</h2>
                    </Col>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Services;
import React from 'react';

import Cards from '../components/Card';

import muncakuy from '../assets/img/mockup-muncakuy.jpg';
import teamdreamer from '../assets/img/mockup-team-dreamer.jpg';
import epltoday from '../assets/img/mockup-epl-today.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {   id: 0,
                    title: 'MuncaKuy',
                    subTitle: 'HTML, CSS, Vanilla JS',
                    imgSrc: muncakuy,
                    link: 'https://muncakuy.netlify.app/'
                },
                {
                    id: 1,
                    title: 'Team Dreamer',
                    subTitle: 'Fetch API, HTML, CSS, Vanilla JS',
                    imgSrc: teamdreamer,
                    link: 'https://team-dreamer.netlify.app/'
                },
                {
                    id: 2,
                    title: 'EPL Today',
                    subTitle: 'PWA, Materialize CSS, JavaScript',
                    imgSrc: epltoday,
                    link: 'https://epl-today.web.app/'
                },
            ]
        }
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Cards item={item} key={item.id}/>
        })
    }


    render() {
        return(
            <Container fluid={true} className="d-flex justify-content-center">
                <Row className='mt-5'>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;
import React from 'react';
import Carousel from '../components/Carousel';

function ProjectsPage(props) {
    return (
        <div className='py-5'>
             {props.title && <h1 className='section-heading text-center'>{props.title}</h1>}
             <Carousel />
        </div>
    );
}

export default ProjectsPage;
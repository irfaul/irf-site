import React from 'react';
import Content from '../components/Content';
import Timeline from '../components/Timeline';
import Skill from '../components/Skill';

function AboutPage(props) {
    return (
        <div className='py-5'>
            {props.title && <h1 className='section-heading text-center'>{props.title}</h1>}
            <Content />
            <Timeline />
            <Skill />
        </div>
    );
}

export default AboutPage;
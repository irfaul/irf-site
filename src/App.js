import React from 'react';
import './App.css';
import {Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './assets/img/irf-logo.png';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Irf',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Projects', path: '/projects'}
      ],
      home: {
        title: 'Be Different',
        subtitle: 'Make this life a wonderful adventure',
        text: 'Welcome to M. Irfa\'ul Fadllillah'
      },
      about: {
        title: 'About me'
      },
      projects: {
        title: 'My Web Projects'
      }
    }
  }

  render() {
    return (
        <Container className='p-0' fluid= {true}>
          <Navbar sticky='top' bg='light' expand='lg'>
            <Navbar.Brand className='navbar-brand pl-5'>
              <img
                src={logo}
                width='54'
                height='30'
                className='d-inline-block align-top'
                alt='irf logo'
              />
            </Navbar.Brand>
            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto pl-5'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/about'>About</Link>
                <Link className='nav-link' to='/projects'>Projects</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path='/' exact render= {() => <HomePage title={this.state.home.title} subtitle={this.state.home.subtitle} text={this.state.home.text} />} />
          <Route path='/about' render= {() => <AboutPage title={this.state.about.title} />} />
          <Route path='/projects' render= {() => <ProjectsPage title={this.state.projects.title} />} />

          <Footer />

        </Container>
    );
  }  
}

export default App;

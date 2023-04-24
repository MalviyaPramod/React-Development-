import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';

import CrudPhase1 from './components/CrudPhase1';
import CrudPhase2 from './components/CrudPhase2';

const App = () => (
  <BrowserRouter>
    <Navbar bg="light" expand="lg" className='mb-5'>
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className='nav-link'>Phase 1</Link>
            <Link to="/phase2" className='nav-link'>Phase 2</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>  

    <Routes>
      <Route exact path="/" element={<CrudPhase1 />}></Route>
      <Route exact path="/phase2" element={<CrudPhase2 />}></Route>
    </Routes>
  </BrowserRouter>

);

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css';

import { UseStateCrud } from './components/crud-use-state';
import { 
  UseReducerCrud, 
  InrementDecrement, 
  UseReducerCrud_2, 
  UseReducerCrud_3, 
  UseReducer_Search_4 
} from './components/crud-use-reducer-baisc';

import { 
  UseReducerCrudAdvance 
} from './components/curd-use-reducer-advance';

const App = () => (
  <BrowserRouter>
    <Navbar bg="light" expand="lg" className='mb-5'>
      <Container>
        <Navbar.Brand href="#home">React Crud Oprations</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className='nav-link'>Use State Crud</Link>
            <NavDropdown title="UseReducer Crud" id="basic-nav-dropdown">
              <Link to="/use-reducer-crud" className='nav-link'>UseReducer 1</Link>
              <Link to="/use-reducer-crud-2" className='nav-link'>UseReducer 2</Link>
              <Link to="/use-reducer-crud-3" className='nav-link'>UseReducer 3</Link>
              <Link to="/use-reducer-search-4" className='nav-link'>UseReducer Search 4</Link>
            </NavDropdown>
            <NavDropdown title="UR Crud Advance" id="basic-nav-dropdown">
              <Link to="/ur-advance" className='nav-link'>UR Advance</Link>
              
            </NavDropdown>
            <Link to="/increment-decrement" className='nav-link'>Inc-des</Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Routes>
      <Route exact path="/" element={<UseStateCrud />}></Route>
      <Route path="/use-reducer-crud" element={<UseReducerCrud />}></Route>
      <Route path="/increment-decrement" element={<InrementDecrement />}></Route>
      <Route path="/use-reducer-crud-2" element={<UseReducerCrud_2 />}></Route>
      <Route path="/use-reducer-crud-3" element={<UseReducerCrud_3 />}></Route>
      <Route path="/use-reducer-search-4" element={<UseReducer_Search_4/>}></Route>
      <Route path="/ur-advance" element={<UseReducerCrudAdvance />}></Route>
    </Routes>
  </BrowserRouter>

);

export default App;

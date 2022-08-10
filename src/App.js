//import React, { useState, useEffect } from 'react';
import {Container, Navbar , Nav} from "react-bootstrap"

import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import {FormContact} from './components/FormContact/FormContact';
import {TableContact} from './components/TableContact/TableContact';


function App() {
  return (
    <div className="App" >
      <BrowserRouter>
      <Navbar  variant="dark" bg="dark">
        <Container>
        <img
              src="/assets/agenda.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <Navbar.Brand >Contact Directory</Navbar.Brand>
          <Nav  className="me-auto">
            <Nav.Link as={Link} to="/">Início</Nav.Link>
            <Nav.Link as={Link} to="/FormContact">Cadastrar</Nav.Link>
          </Nav>
        </Container>   
      </Navbar>

      <Routes>
        <Route path="/" index element={<TableContact/>}/>
        <Route path="/FormContact" element={<FormContact/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    
    
  );
}

export default App;

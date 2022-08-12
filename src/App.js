import {Container, Navbar , Nav} from "react-bootstrap"

import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import {AddContact} from './components/CrudContact/Create';
import {InformationContact} from './components/InformationContact/InformationContact';
import {ToUpdateContact} from "./components/CrudContact/ToUpdate";


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
        <Route path="/" index element={<InformationContact/>}/>
        <Route path="/CrudContact" element={<AddContact/>}/>
        <Route path="/CrudContact/ToUpdate/:id" element={<ToUpdateContact/>}/>
        <Route path="/" element={<ToUpdateContact/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    
    
  );
}

export default App;

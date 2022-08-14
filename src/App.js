import {Container, Navbar , Nav} from "react-bootstrap"

import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import {AddContact} from './components/FormContact/FormContact';
import {InformationContact} from './components/TableContact/InformationContact';
import {ToUpdateContact} from "./components/FormContact/ToUpdateContact";

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
      <Navbar  className="navbar">
        <Container>
        <img
              src="/assets/agenda.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="logo agenda"
            />
          <Nav  variant="pills" activeKey="1" className="me-auto">
            <Nav.Link eventKey="link-1" className="navbar-brand" as={Link} to="/">Agenda de Contatos</Nav.Link>
            <Nav.Link className="navbar-brand" as={Link} to="/FormContact">Cadastrar</Nav.Link>
          </Nav>
        </Container>   
      </Navbar>

      <Routes>
        <Route path="/" index element={<InformationContact />}/>
        <Route path="/FormContact" element={<AddContact/>}/>
        <Route path="/FormContact/ToUpdateContact/:id" element={<ToUpdateContact/>}/>
        <Route path="/" element={<ToUpdateContact/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;

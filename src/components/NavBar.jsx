import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import LogoOrganicos from '../logos/LogoOrganicos.jpg';
import CartWidget from './CartWidget';


function Navbarorganicos() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/">
          <img
            src={LogoOrganicos}
            width="120px"
            className="d-inline-block align-top"
            alt="Logo Orgánicos del Retiro"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/categoryId/Frutas">
              Frutas
            </Nav.Link>
            <Nav.Link as={Link} to="/categoryId/Verduras">
              Verduras
            </Nav.Link>
            <Nav.Link as={Link} to="/categoryId/Hortalizas">
              Hortalizas
            </Nav.Link>
            <Nav.Link as={Link} to="/categoryId/Otros">
              Otros
            </Nav.Link>
          </Nav>
          <Nav.Link as={Link} to="Cart"><CartWidget />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarorganicos;
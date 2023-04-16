import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
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
            <Nav.Link as={Link} to="/categoria/frutas">
              Frutas
            </Nav.Link>
            <Nav.Link as={Link} to="/categoria/verduras">
              Verduras
            </Nav.Link>
            <Nav.Link as={Link} to="/categoria/hortalizas">
              Hortalizas
            </Nav.Link>
            <Nav.Link as={Link} to="/categoria/otros">
              Otros
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar producto"
              className="me-2"
              aria-label="Buscar"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarorganicos;

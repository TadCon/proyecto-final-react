import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark">
      <Container>
        <Link to="/" className="item m-3">
          Inicio
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="item m-3">
            <Link to='/categoria/empanadas' className="item mx-3">Empanadas</Link>
            <Link to="/categoria/pizzas" className="item mx-3">Pizzas</Link>
          </Nav>
          <Nav>
            <Link to="/cart" className="item mx-5">
              Carrito
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark">
      <Container>
        <Link className="item m-3" to="/">
          Inicio
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="item m-3">
            <NavLink className="item mx-3">Gorras</NavLink>
            <Link className="item mx-3" to="/categoria/remeras">
              Remeras
            </Link>
          </Nav>
          <Nav>
            <Link className="item mx-5" to="/cart">
              Carrito
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

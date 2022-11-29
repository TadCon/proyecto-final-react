import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useCartContext } from "../../context/cartContext";





const NavBar = () => {
  const { cartlist } = useCartContext();


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
            <Link to="/cart" className="item mx-5 nowrap">
              Carrito 
            <AiOutlineShoppingCart className="item cart" style={{color: "white"}}/>
               {cartlist.length}
            </Link>
          </Nav>
          <Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

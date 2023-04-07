import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { Store } from "../store";
import { useContext } from "react";

function Header() {
  const { state} = useContext(Store);
  const {cart} = state;
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>amazona</Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <Link to="/cart" className="nav-link">
              Cart
              {
                cart.cartItems.length >0 && (
                  <Badge pill bg="danger">
                    {cart.cartItems.reduce((a,c)=>a+c.quantity,0)}
                  </Badge>
                )
              }
            </Link>

          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;

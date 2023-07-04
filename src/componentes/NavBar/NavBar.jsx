import CartWidget from '../CartWidget/CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link,NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">Instrumentos Músicales Shonen</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/categoria/1"> Guitarras </Nav.Link>
                <Nav.Link href="/categoria/2"> Bajos </Nav.Link>
                <Nav.Link href="/categoria/3"> Baterías </Nav.Link>
                <Nav.Link href="/categoria/4"> Piano </Nav.Link>
              
              </Nav>  
            <CartWidget/>
            </Container>  
          </Navbar>



  )
}
export default NavBar 
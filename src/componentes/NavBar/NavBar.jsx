import CartWidget from '../CartWidget/CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Instrumentos Músicales Shonen</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home"> Guitarras </Nav.Link>
                <Nav.Link href="#features"> Bajos </Nav.Link>
                <Nav.Link href="#pricing"> Baterías </Nav.Link>
                <Nav.Link href="#pricing"> Teclados </Nav.Link>
              </Nav>
            <CartWidget/>
            </Container>
          </Navbar>



  )
}
export default NavBar 
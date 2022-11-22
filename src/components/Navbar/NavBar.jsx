import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import CartWidget from '../widget/CartWidget';

export const NavBar = ({opciones}) => {
  
  return (
      <>
        <Navbar bg="success" variant="dark">
          <Container>
            <Navbar.Brand href="#home">GS-Sprots</Navbar.Brand>
            <Nav className="me-auto">
              {
                opciones.map(({opcion})=>{
                  return <Nav.Link href={"#"+opcion}>{opcion}</Nav.Link>
                })
              }
            </Nav> 
            <CartWidget/>
          </Container>
        </Navbar>
      </>
    )
}
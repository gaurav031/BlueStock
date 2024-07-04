import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/image/logo.png'
import fulllogo from '../../assets/image/fulllogo.png'
import vector from '../../assets/image/Vector.png'
import './Header.css'

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-white ">

      <Container fluid>
        <Navbar.Brand href="/">
          <img src={fulllogo} alt="Logo" className="d-inline-block align-top logo" />
        </Navbar.Brand>
        {/* <Navbar.Brand href="#" className='title'>BlueStock</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" className='vector'>
        <img src={vector} alt="" />
        </Navbar.Toggle>
       
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='text-header'>PRODUCTS</Nav.Link>
            <Nav.Link href="#action2" className='text-header'>PRICING</Nav.Link>
            <Nav.Link href="#action2" className='text-header'>COMMUNITY</Nav.Link>
            <NavDropdown title="MEDIA" id="navbarScrollingDropdown" className='text-header'>
              <NavDropdown.Item href="#action3">MEDIA</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
             
            </NavDropdown>
            <NavDropdown title="SUPPORT" id="navbarScrollingDropdown" className='text-header'>
              <NavDropdown.Item href="#action3">SUPPORT</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
             
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            
            <Button className='nav-btn'  variant="outline-primary">Sign up Now</Button>
            <Button className='nav-btn' variant="outline-primary" >Sign in</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header
import Button from 'react-bootstrap/Button'; // Importing Button component from React Bootstrap
import Container from 'react-bootstrap/Container'; // Importing Container component from React Bootstrap
import Form from 'react-bootstrap/Form'; // Importing Form component from React Bootstrap
import Nav from 'react-bootstrap/Nav'; // Importing Nav component from React Bootstrap
import Navbar from 'react-bootstrap/Navbar'; // Importing Navbar component from React Bootstrap
import NavDropdown from 'react-bootstrap/NavDropdown'; // Importing NavDropdown component from React Bootstrap
import fulllogo from '../../assets/image/fulllogo.png'; // Importing the full logo image from assets
import vector from '../../assets/image/Vector.png'; // Importing the vector image from assets
import './Header.css'; // Importing custom CSS for additional styling

/**
 * Header component for the Bluestock website.
 * Displays a responsive navigation bar with logo, navigation links, dropdown menus,
 * and sign-up/sign-in buttons using React Bootstrap components.
 */
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
            <Button className='nav-btn' href='/signup' variant="outline-primary">Sign up Now</Button>
            <Button className='nav-btn' href='/login' variant="outline-primary" >Sign in</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

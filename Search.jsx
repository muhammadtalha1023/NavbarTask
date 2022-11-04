import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './Nav.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaSearch } from "react-icons/fa";
import { FaUserAlt } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';


function AutoLayoutExample() {
  return (
    <Container>
      <div className='fluid-container'>
      <Row>
        <Col xs={2}>
        <Image 
        src='https://themes.muffingroup.com/betheme-store/wp-content/uploads/2021/09/retina-bethemestore.png' width={140} height={30}/>
        </Col>
        <Col xs={7}>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><FaSearch /></InputGroup.Text>
        <Form.Control
          placeholder="Enter Your Search"
          aria-label="Enter Your Search"
          aria-describedby="basic-addon2"
        />
      </InputGroup>
        </Col>
        <Col xs={2}>
        <FaUserAlt />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <FaRegHeart />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <FaLock />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Col>
        <Col xs={1}>
      <Form.Select size="sm">
        <option>select</option>
      </Form.Select>
        </Col>
      </Row>
      </div>
      <Row>
        <Col >
        <Navbar>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Brand href="#features">Features</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Brand href="#shop">Shop</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Brand href="#home">Pages</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <Navbar.Brand href="#home">About</Navbar.Brand>
          <Navbar.Brand href="#home">Contacts</Navbar.Brand>
          <Navbar.Brand href="#home">Terms of Use</Navbar.Brand>
          </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>     
        </Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;
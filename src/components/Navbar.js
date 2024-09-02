import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand href="#">Eth_Dash</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link>
            <Link to="price" smooth={true} duration={500}>
              Ethereum Dashboards
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="news" smooth={true} duration={500}>
              Ethereum News
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="quiz" smooth={true} duration={500}>
              Ethereum Quiz
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="wallet" smooth={true} duration={500}>
              Crypto Wallet
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;

import React, { Component, Fragment } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldHideMenuItem: false,
    };
  }

  componentDidMount() {
    const currentUrl = window.location.href;
    const shouldHideMenuItem = currentUrl.includes('#blog');
    this.setState({ shouldHideMenuItem });
  }
  render() {
    const { shouldHideMenuItem } = this.state;


    return (
      <Fragment>
        <Navbar fixed="top"  collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/"className="solnavbold">SOLENT TOURS</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              {!shouldHideMenuItem && <Nav.Link href="#blog">Our Blog</Nav.Link>}
                
              </Nav>
              <Nav>
                <Nav.Link eventKey={2} href="/Login">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    )
  }
}

export default Menu

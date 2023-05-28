import React, { Component, Fragment } from 'react'
import { Row, Col} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
     <Fragment>
        <div className="footerback m-0 mt-5 pt-3 shadow-sm">
          <Container>
            <Row className='px-0 my-5'>
            <Col className="p-2" lg={4} md={4} sm={6} xs={12}>
                <h5 className="footer-menu-title">OFFICE ADDRESS</h5>
                <p>
                1635 Franklin Street Montgomery, Near Sherwood 
                Mall. AL 36104
                </p>
              </Col>


              <Col className="p-2" lg={4} md={4} sm={6} xs={12}>
                <h5 className="footer-menu-title">THE COMPANY</h5>
                <Link to="#" className="footer-link"> About Us</Link><br></br>
                <Link to="#" className="footer-link"> FAQ</Link><br></br>
                <Link to="/contact" className="footer-link"> Contact Us</Link><br></br>
              </Col>

              <Col className="p-2" lg={4} md={4} sm={6} xs={12}>
                <h5 className="footer-menu-title">MORE INFO</h5>
                <Link to="#" className="footer-link">How To Purchase</Link><br></br>
                <Link to="#" className="footer-link"> Privacy Policy</Link><br></br>
                <Link to="#" className="footer-link"> Refund Policy </Link><br></br>
              </Col>
            </Row>
          </Container>


          <Container fluid={true} className='text-center m-0 pt-3 pb-1 bg-dark'>
            <Container>
              <Row>
                <h6 className='text-white'>ALL rights </h6>
              </Row>
            </Container>
          </Container>
        </div>
     </Fragment>
    )
  }
}

export default Footer

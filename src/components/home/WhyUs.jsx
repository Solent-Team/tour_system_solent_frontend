import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

class WhyUs extends Component {
  render() {
    return (
     <Fragment>
      <hr className="line" />
         <Container className="py-5" fluid={true}>

      <h2 className="text-center">Why Choose Us?</h2>
      <Row className="mt-4">
        <Col md={4}>
          <div className="text-center">
            <i className="fa fa-star fa-3x mb-3 icon-yellow"></i>
            <h4>Quality Service</h4>
            <p>We provide top-notch service to our customers.</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="text-center">
            <i className="fa fa-thumbs-up fa-3x mb-3 icon-blue"></i>
            <h4>Customer Satisfaction</h4>
            <p>Our priority is to ensure customer satisfaction.</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="text-center">
            <i className="fa fa-clock fa-3x mb-3 icon-green"></i>
            <h4>Timely Delivery</h4>
            <p>We deliver our services on time, every time.</p>
          </div>
        </Col>
      </Row>
    </Container>
     </Fragment>
    )
  }
}

export default WhyUs

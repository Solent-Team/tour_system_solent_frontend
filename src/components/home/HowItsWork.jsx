import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap';

class HowItsWork extends Component {
    render() {
        return (
            <Fragment>
                <hr className="line" />
                <Container className="py-5" fluid={true}>
                
                    <h2 className="text-center">How Tower Packages Work</h2>
                    
                    <Row className="mt-4">
                        <Col md={4} className="text-center">
                            <i className="fa fa-search fa-3x mb-3  icon-blue"></i>
                            <h4>Step 1</h4>
                            <p>Explore available tower packages</p>
                        </Col>
                        <Col md={4} className="text-center">
                            <i className="fa fa-shopping-cart fa-3x mb-3 icon-green"></i>
                            <h4>Step 2</h4>
                            <p>Select and customize your package</p>
                        </Col>
                        <Col md={4} className="text-center">
                            <i className="fa fa-check-circle fa-3x mb-3 icon-orange"></i>
                            <h4>Step 3</h4>
                            <p>Confirm your order and make payment</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default HowItsWork

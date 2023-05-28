import React, { Component, Fragment } from 'react'
import { Button, Col, Card, Row, Badge } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import image from '../../asset/images/IMG1.png'
import { Rating } from '@mui/material';


class Packages extends Component {
    render() {
        return (
            <Fragment>
                <div className="text-center p-1 mt-2">
                    <hr className="line" />
                    <h1>Sri Lanka Holiday & Tour Packages 2023</h1>

                </div>
                <Container fluid={true}>
                    <Row>
                        <Col xl={3} lg={3} md={2} sm={4} xs={6}>
                            <Card style={{ width: '20rem', margin: '10px' }}>
                                <Card.Img variant="top" src={image} style={{ borderRadius: '0', objectFit: 'cover' }} />
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <Card.Title>Card Title</Card.Title>
                                            <Row>
                                                <Col md={8}>
                                                    <i className='fa fa-home'></i>&nbsp;
                                                    <i className='fa fa-bed'></i>&nbsp;
                                                    <i className='fa fa-car'></i>&nbsp;
                                                    <i className='fa fa-cutlery'></i>
                                                </Col>
                                                <Col md={4}>
                                                <Badge bg="success">7 Days</Badge>
                                                </Col>
                                            </Row>

                                        </div>
                                        <Rating name="size-small" defaultValue={2} size="small" />
                                    </div>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer style={{ backgroundColor: '#0291d3' }}>
                                    <Container className="text-center">
                                        <a href="#" className="btn btn-link w-100" style={{ color: 'white' }}>
                                            More Details
                                        </a>
                                    </Container>
                                </Card.Footer>
                            </Card>
                        </Col>

                        <Col className="p-1 ml-2" xl={3} lg={3} md={2} sm={4} xs={6}>
                            <Card style={{ width: '20rem', margin: '10px' }} className="shadow">
                                <Card.Img variant="top" src={image} style={{ borderRadius: '0', objectFit: 'cover' }} />
                                <Card.Body>

                                            <Card.Title>Card Title</Card.Title>
                                            <Row>
                                                <Col md={8}>
                                                    <i className='fa fa-home'></i>&nbsp;
                                                    <i className='fa fa-bed'></i>&nbsp;
                                                    <i className='fa fa-car'></i>&nbsp;
                                                    <i className='fa fa-cutlery'></i>
                                                </Col>
                                                <Col md={4}>
                                                <Badge bg="success">7 Days</Badge>
                                                </Col>
                                            </Row>
                                            <Rating name="size-small" defaultValue={4} size="small" readOnly/>
                                                                            
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer style={{ backgroundColor: '#0291d3' }}>
                                    <Container className="text-center">
                                        <a href="#" className="btn btn-link w-100" style={{ color: 'white' }}>
                                            More Details
                                        </a>
                                    </Container>
                                </Card.Footer>
                            </Card>
                        </Col>

                        <Col className="p-1 ml-2" xl={3} lg={3} md={2} sm={4} xs={6}>
                            <Card style={{ width: '20rem', margin: '10px' }}>
                                <Card.Img variant="top" src={image} style={{ borderRadius: '0', objectFit: 'cover' }} />
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <Card.Title>Card Title</Card.Title>
                                            <i className='fa fa-home'></i>&nbsp;
                                            <i className='fa fa-bed'></i>&nbsp;
                                            <i className='fa fa-car'></i>&nbsp;
                                            <i className='fa fa-cutlery'></i>
                                        </div>
                                        <div>
                                            <Badge bg="success">7 Days</Badge>
                                        </div>
                                    </div>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer style={{ backgroundColor: '#0291d3' }}>
                                    <Container className="text-center">
                                        <a href="#" className="btn btn-link w-100" style={{ color: 'white' }}>
                                            More Details
                                        </a>
                                    </Container>
                                </Card.Footer>
                            </Card>
                        </Col>

                        <Col className="p-1 ml-2" xl={3} lg={3} md={2} sm={4} xs={6}>
                            <Card style={{ width: '20rem', margin: '10px' }}>
                                <Card.Img variant="top" src={image} style={{ borderRadius: '0', objectFit: 'cover' }} />
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <Card.Title>Card Title</Card.Title>
                                            <i className='fa fa-home'></i>&nbsp;
                                            <i className='fa fa-bed'></i>&nbsp;
                                            <i className='fa fa-car'></i>&nbsp;
                                            <i className='fa fa-cutlery'></i>
                                        </div>
                                        <div>
                                            <Badge bg="success">7 Days</Badge>
                                        </div>
                                    </div>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer style={{ backgroundColor: '#0291d3' }}>
                                    <Container className="text-center">
                                        <a href="#" className="btn btn-link w-100" style={{ color: 'white' }}>
                                            More Details
                                        </a>
                                    </Container>
                                </Card.Footer>
                            </Card>
                        </Col>

                        <Col className="p-1 ml-2" xl={3} lg={3} md={2} sm={4} xs={6}>
                            <Card style={{ width: '20rem', margin: '10px' }}>
                                <Card.Img variant="top" src={image} style={{ borderRadius: '0', objectFit: 'cover' }} />
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <Card.Title>Card Title</Card.Title>
                                            <i className='fa fa-home'></i>&nbsp;
                                            <i className='fa fa-bed'></i>&nbsp;
                                            <i className='fa fa-car'></i>&nbsp;
                                            <i className='fa fa-cutlery'></i>
                                        </div>
                                        <div>
                                            <Badge bg="success">7 Days</Badge>
                                        </div>
                                    </div>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer style={{ backgroundColor: '#0291d3' }}>
                                    <Container className="text-center">
                                        <a href="#" className="btn btn-link w-100" style={{ color: 'white' }}>
                                            More Details
                                        </a>
                                    </Container>
                                </Card.Footer>
                            </Card>
                        </Col>

                        <Col className="p-1 ml-2" xl={3} lg={3} md={2} sm={4} xs={6}>
                            <Card style={{ width: '20rem', margin: '10px' }}>
                                <Card.Img variant="top" src={image} style={{ borderRadius: '0', objectFit: 'cover' }} />
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <Card.Title>Card Title</Card.Title>
                                            <i className='fa fa-home'></i>&nbsp;
                                            <i className='fa fa-bed'></i>&nbsp;
                                            <i className='fa fa-car'></i>&nbsp;
                                            <i className='fa fa-cutlery'></i>
                                        </div>
                                        <div>
                                            <Badge bg="success">7 Days</Badge>
                                        </div>
                                    </div>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer style={{ backgroundColor: '#0291d3' }}>
                                    <Container className="text-center">
                                        <a href="#" className="btn btn-link w-100" style={{ color: 'white' }}>
                                            More Details
                                        </a>
                                    </Container>
                                </Card.Footer>
                            </Card>
                        </Col>

                        <Col className="p-1 ml-2" xl={3} lg={3} md={2} sm={4} xs={6}>
                            <Card style={{ width: '20rem', margin: '10px' }}>
                                <Card.Img variant="top" src={image} style={{ borderRadius: '0', objectFit: 'cover' }} />
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <Card.Title>Card Title</Card.Title>
                                            <i className='fa fa-home'></i>&nbsp;
                                            <i className='fa fa-bed'></i>&nbsp;
                                            <i className='fa fa-car'></i>&nbsp;
                                            <i className='fa fa-cutlery'></i>
                                        </div>
                                        <div>
                                            <Badge bg="success">7 Days</Badge>
                                        </div>
                                    </div>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer style={{ backgroundColor: '#0291d3' }}>
                                    <Container className="text-center">
                                        <a href="#" className="btn btn-link w-100" style={{ color: 'white' }}>
                                            More Details
                                        </a>
                                    </Container>
                                </Card.Footer>
                            </Card>
                        </Col>

                        <Col className="p-1 ml-2" xl={3} lg={3} md={2} sm={4} xs={6}>
                            <Card style={{ width: '20rem', margin: '10px' }}>
                                <Card.Img variant="top" src={image} style={{ borderRadius: '0', objectFit: 'cover' }} />
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <Card.Title>Card Title</Card.Title>
                                            <i className='fa fa-home'></i>&nbsp;
                                            <i className='fa fa-bed'></i>&nbsp;
                                            <i className='fa fa-car'></i>&nbsp;
                                            <i className='fa fa-cutlery'></i>
                                        </div>
                                        <div>
                                            <Badge bg="success">7 Days</Badge>
                                        </div>
                                    </div>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer style={{ backgroundColor: '#0291d3' }}>
                                    <Container className="text-center">
                                        <a href="#" className="btn btn-link w-100" style={{ color: 'white' }}>
                                            More Details
                                        </a>
                                    </Container>
                                </Card.Footer>
                            </Card>
                        </Col>

                    </Row>
                </Container>


            </Fragment>
        )
    }
}

export default Packages

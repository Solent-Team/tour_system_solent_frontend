import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import imge2 from '../../asset/images/IMG2.png'

class BlogPost extends Component {
    render() {
        return (
            <Fragment>
                <Container className="py-5" fluid={true}>
                <hr className="line" />
                    <h2 className="text-center">Blog Posts</h2>
                    <Row className="mt-4">
                        <Col md={6} lg={4} xl={3} className="mb-4">
                            <Card style={{ height: '100%' }}>
                                <Card.Img variant="top" src={imge2} />
                                <Card.Body>
                                    <Card.Title>Blog Post Title</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae convallis est.
                                    </Card.Text>
                                    <Card.Link href="#">Read More</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Duplicate the above Card component as needed */}

                        <Col md={6} lg={4} xl={3} className="mb-4">
                            <Card style={{ height: '100%' }}>
                                <Card.Img variant="top" src={imge2} />
                                <Card.Body>
                                    <Card.Title>Blog Post Title</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae convallis est.
                                    </Card.Text>
                                    <Card.Link href="/contact">Read More</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6} lg={4} xl={3} className="mb-4">
                            <Card style={{ height: '100%' }}>
                                <Card.Img variant="top" src={imge2} />
                                <Card.Body>
                                    <Card.Title>Blog Post Title</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae convallis est.
                                    </Card.Text>
                                    <Button variant="primary">Read More</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6} lg={4} xl={3} className="mb-4">
                            <Card style={{ height: '100%' }}>
                                <Card.Img variant="top" src={imge2} />
                                <Card.Body>
                                    <Card.Title>Blog Post Title</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae convallis est.
                                    </Card.Text>
                                    <Button variant="primary">Read More</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Duplicate the above Card component as needed */}

                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default BlogPost

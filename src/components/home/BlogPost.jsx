import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import blogimg1 from '../../asset/images/blogpop.jpg'
import blogimg2 from '../../asset/images/IMG2.png'
import blogimg3 from '../../asset/images/blogella.jpg'
import blogimg4 from '../../asset/images/bloggalle.jpg'

class BlogPost extends Component {
    render() {
        return (
            <Fragment>
                <Container className="py-5" fluid={true}>
                <hr className="line" />
                    <h3 className="text-center">Our Popular Blog Posts</h3>
                    <Row className="mt-4">
                        <Col md={6} lg={4} xl={3} className="mb-4">
                            <Card style={{ height: '100%' }}>
                                <Card.Img variant="top" src={blogimg1} />
                                <Card.Body>
                                    <Card.Title>Top 10 most popular spots to visit in Sri Lanka</Card.Title>
                                        <Card.Text>
                                        Sri Lanka is a hub that consists of a quite a number of popular locations for people to visit 
                                        </Card.Text>

                                    <Button className="text-center" variant="secondary">
                                        <a href="#" className="mb-4">  
                                            <Link to="/BlogPopular" style={{ color: 'white' }}>Click here to read more!</Link>                                 
                                        </a>
                                    </Button> 
                                    
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Duplicate the above Card component as needed */}

                        <Col md={6} lg={4} xl={3} className="mb-4">
                            <Card style={{ height: '100%' }}>
                                <Card.Img variant="top" src={blogimg2} />
                                <Card.Body>
                                    <Card.Title>Top 7 most relaxing beaches to visit in Sri Lanka</Card.Title>
                                        <Card.Text>
                                        It is a well- known fact that beaches in Sri Lanka are globally popular for its beauty and relaxing environment 
                                        </Card.Text>
                                    
                                    <Button className="text-center" variant="secondary">
                                        <a href="#" className="mb-4">  
                                            <Link to="/BlogBeach" style={{ color: 'white' }}>Click here to read more!</Link>                                 
                                        </a>
                                    </Button>

                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6} lg={4} xl={3} className="mb-4">
                            <Card style={{ height: '100%' }}>
                                <Card.Img variant="top" src={blogimg3} />
                                <Card.Body>
                                    <Card.Title>Top 10 exciting things to do in Ella, Sri Lanka</Card.Title>
                                        <Card.Text>
                                        Ella is known as a popular destination for a range of fun activities and for its beautiful scenery 
                                        </Card.Text>

                                    <Button className="text-center" variant="secondary">
                                        <a href="#" className="mb-4">  
                                            <Link to="/BlogElla" style={{ color: 'white' }}>Click here to read more!</Link>                                 
                                        </a>
                                    </Button> 

                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={6} lg={4} xl={3} className="mb-4">
                            <Card style={{ height: '100%' }}>
                                <Card.Img variant="top" src={blogimg4} />
                                <Card.Body>
                                    <Card.Title>Galle Fort Guide: How to visit, what to do, etc.</Card.Title>
                                        <Card.Text>
                                        The Galle Fort is considered the most beautiful coastal town for people to visit in Sri Lanka
                                        </Card.Text>
                                    
                                    <Button className="text-center" variant="secondary">
                                        <a href="#" className="mb-4">  
                                            <Link to="/BlogGalleFort" style={{ color: 'white' }}>Click here to read more!</Link>                                 
                                        </a>
                                    </Button>

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

import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Card, Row, Badge } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import image from '../../asset/images/IMG1.png'
import imagesaf from '../../asset/images/saftour.jpg'
import imagepop from '../../asset/images/popspot.jpg'
import imagefam from '../../asset/images/famtrip.jpg'
import imagedis from '../../asset/images/discover.jpg'
import imagehonmoon from '../../asset/images/honmoon.jpg'
import imagejaff from '../../asset/images/jaffna.jpg'
import imagecol from '../../asset/images/colombo.jpg'
import imagekan from '../../asset/images/kandy.jpg'
import { Rating } from '@mui/material';


class Packages extends Component {
    render() {
        return (
            <Fragment>
                <div className="text-center p-1 mt-2">
                    <hr className="line" />
                    <h2>Sri Lanka Holiday & Tour Packages 2023</h2>

                </div>
                <Container fluid={true}>
                    <Row>
                    <Col className="p-1 ml-2" xl={3} lg={3} md={3} sm={4} xs={6}>
                            <Card style={{ width: '20rem', margin: '10px' }}>
                                <Card.Img variant="top" src={imagesaf} style={{ borderRadius: '0', objectFit: 'cover' }} />
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <Card.Title>Sri Lanka Safari Tour</Card.Title>
                                            <i className='fa fa-home'></i>&nbsp;
                                            <i className='fa fa-bed'></i>&nbsp;
                                            <i className='fa fa-car'></i>&nbsp;
                                            <i className='fa fa-cutlery'></i>
                                        </div>
                                        <div>
                                            <Badge bg="success">7 Days</Badge>
                                            <Rating name="size-small" defaultValue={5} size="small" readOnly/>
                                        </div>
                                    </div>
                                    <Card.Text className="text-center">
                                        Enjoy the exciting adventure of a safari with your loved ones
                                    </Card.Text>
                                    <Card.Text>
                                        <Container className="pkg-price">
                                                Price - Rs. 180,000 (GBP 475)                                           
                                        </Container>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer style={{ backgroundColor: '#022fd3' }}>
                                    <Container className="text-center">
                                        <a href="#" className="btn btn-link w-100">  
                                            <Link to="/SafariTour" style={{ color: 'white' }}>Click here for more information!</Link>                                 
                                        </a>
                                    </Container>
                                </Card.Footer>
                            </Card>
                        </Col>

                        <Col className="p-1 ml-2" xl={3} lg={3} md={2} sm={4} xs={6}>
                            <Card style={{ width: '20rem', margin: '10px' }}>
                                <Card.Img variant="top" src={imagepop} style={{ borderRadius: '0', objectFit: 'cover' }} />
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <Card.Title>Popular in Sri Lanka</Card.Title>
                                            <i className='fa fa-home'></i>&nbsp;
                                            <i className='fa fa-bed'></i>&nbsp;
                                            <i className='fa fa-car'></i>&nbsp;
                                            <i className='fa fa-cutlery'></i>
                                        </div>
                                        <div>
                                            <Badge bg="success">12 Days</Badge>
                                            <Rating name="size-small" defaultValue={4} size="small" readOnly/>
                                        </div>
                                    </div>
                                    <Card.Text className="text-center">
                                        Sri Lanka's most popular locations will satisfy your needs
                                    </Card.Text>
                                    <Card.Text>
                                        <Container className="pkg-price">
                                                Price - Rs. 220,000 (GBP 581)                                           
                                        </Container>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer style={{ backgroundColor: '#022fd3' }}>
                                    <Container className="text-center">
                                        <a href="#" className="btn btn-link w-100">  
                                            <Link to="/Popular" style={{ color: 'white' }}>Click here for more information!</Link>                                 
                                        </a>
                                    </Container>
                                </Card.Footer>
                            </Card>
                        </Col>

                        <Col className="p-1 ml-2" xl={3} lg={3} md={2} sm={4} xs={6}>
                            <Card style={{ width: '20rem', margin: '10px' }}>
                                <Card.Img variant="top" src={imagefam} style={{ borderRadius: '0', objectFit: 'cover' }} />
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <Card.Title>Family Trip to Sri Lanka</Card.Title>
                                            <i className='fa fa-home'></i>&nbsp;
                                            <i className='fa fa-bed'></i>&nbsp;
                                            <i className='fa fa-car'></i>&nbsp;
                                            <i className='fa fa-cutlery'></i>
                                        </div>
                                        <div>
                                            <Badge bg="success">15 Days</Badge>
                                            <Rating name="size-small" defaultValue={5} size="small" readOnly/>
                                        </div>
                                    </div>
                                    <Card.Text className="text-center">
                                        Enjoy the excitement of spending time with your family in Sri Lanka
                                    </Card.Text>
                                    <Card.Text>
                                        <Container className="pkg-price">
                                                Price - Rs. 280,000 (GBP 740)                                           
                                        </Container>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer style={{ backgroundColor: '#022fd3' }}>
                                    <Container className="text-center">
                                        <a href="#" className="btn btn-link w-100">  
                                            <Link to="/FamilyTrip" style={{ color: 'white' }}>Click here for more information!</Link>                                 
                                        </a>
                                    </Container>
                                </Card.Footer>
                            </Card>
                        </Col>

                        <Col className="p-1 ml-2" xl={3} lg={3} md={2} sm={4} xs={6}>
                            <Card style={{ width: '20rem', margin: '10px' }}>
                                <Card.Img variant="top" src={imagedis} style={{ borderRadius: '0', objectFit: 'cover' }} />
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <Card.Title>Discover Sri Lanka</Card.Title>
                                            <i className='fa fa-home'></i>&nbsp;
                                            <i className='fa fa-bed'></i>&nbsp;
                                            <i className='fa fa-car'></i>&nbsp;
                                            <i className='fa fa-cutlery'></i>
                                        </div>
                                        <div>
                                            <Badge bg="success">10 Days</Badge>
                                            <Rating name="size-small" defaultValue={4} size="small" readOnly/>
                                        </div>
                                    </div>
                                    <Card.Text className="text-center">
                                        Discover the endless adventures and suprises in Sri Lanka
                                    </Card.Text>
                                    <Card.Text>
                                        <Container className="pkg-price">
                                                Price - Rs. 250,000 (GBP 661)                                           
                                        </Container>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer style={{ backgroundColor: '#022fd3' }}>
                                    <Container className="text-center">
                                        <a href="#" className="btn btn-link w-100">  
                                            <Link to="/Discover" style={{ color: 'white' }}>Click here for more information!</Link>                                 
                                        </a>
                                    </Container>
                                </Card.Footer>
                            </Card>
                        </Col>

                        <Col className="p-1 ml-2" xl={3} lg={3} md={2} sm={4} xs={6}>
                            <Card style={{ width: '20rem', margin: '10px' }}>
                                <Card.Img variant="top" src={imagehonmoon} style={{ borderRadius: '0', objectFit: 'cover' }} />
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <Card.Title>Honeymoon in Sri Lanka</Card.Title>
                                            <i className='fa fa-home'></i>&nbsp;
                                            <i className='fa fa-bed'></i>&nbsp;
                                            <i className='fa fa-car'></i>&nbsp;
                                            <i className='fa fa-cutlery'></i>
                                        </div>
                                        <div>
                                            <Badge bg="success">7 Days</Badge>
                                            <Rating name="size-small" defaultValue={5} size="small" readOnly/>
                                        </div>
                                    </div>
                                    <Card.Text className="text-center">
                                        Spend time and relax with your significant other in Sri Lanka 
                                    </Card.Text>
                                    <Card.Text>
                                        <Container className="pkg-price">
                                                Price - Rs. 100,000 (GBP 264)                                           
                                        </Container>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer style={{ backgroundColor: '#022fd3' }}>
                                    <Container className="text-center">
                                        <a href="#" className="btn btn-link w-100">  
                                            <Link to="/Honeymoon" style={{ color: 'white' }}>Click here for more information!</Link>                                 
                                        </a>
                                    </Container>
                                </Card.Footer>
                            </Card>
                        </Col>

                        <Col className="p-1 ml-2" xl={3} lg={3} md={2} sm={4} xs={6}>
                            <Card style={{ width: '20rem', margin: '10px' }}>
                                <Card.Img variant="top" src={imagejaff} style={{ borderRadius: '0', objectFit: 'cover' }} />
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <Card.Title>Jaffna Tour with your family</Card.Title>
                                            <i className='fa fa-home'></i>&nbsp;
                                            <i className='fa fa-bed'></i>&nbsp;
                                            <i className='fa fa-car'></i>&nbsp;
                                            <i className='fa fa-cutlery'></i>
                                        </div>
                                        <div>
                                            <Badge bg="success">8 Days</Badge>
                                            <Rating name="size-small" defaultValue={4} size="small" readOnly/>
                                        </div>
                                    </div>
                                    <Card.Text className="text-center">
                                        Visit Jaffna for an amazing experience and learn about its rich history
                                    </Card.Text>
                                    <Card.Text>
                                        <Container className="pkg-price">
                                                Price - Rs. 150,000 (GBP 396)                                           
                                        </Container>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer style={{ backgroundColor: '#022fd3' }}>
                                    <Container className="text-center">
                                        <a href="#" className="btn btn-link w-100">  
                                            <Link to="/JaffnaTour" style={{ color: 'white' }}>Click here for more information!</Link>                                 
                                        </a>
                                    </Container>
                                </Card.Footer>
                            </Card>
                        </Col>

                        <Col className="p-1 ml-2" xl={3} lg={3} md={2} sm={4} xs={6}>
                            <Card style={{ width: '20rem', margin: '10px' }}>
                                <Card.Img variant="top" src={imagecol} style={{ borderRadius: '0', objectFit: 'cover' }} />
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <Card.Title>Colombo Tour with your family</Card.Title>
                                            <i className='fa fa-home'></i>&nbsp;
                                            <i className='fa fa-bed'></i>&nbsp;
                                            <i className='fa fa-car'></i>&nbsp;
                                            <i className='fa fa-cutlery'></i>
                                        </div>
                                        <div>
                                            <Badge bg="success">7 Days</Badge>
                                            <Rating name="size-small" defaultValue={4} size="small" readOnly/>
                                        </div>
                                    </div>
                                    <Card.Text className="text-center">
                                        Visit Colombo to have loads of fresh moments to look forward to 
                                    </Card.Text>
                                    <Card.Text>
                                        <Container className="pkg-price">
                                                Price - Rs. 170,000 (GBP 449)                                           
                                        </Container>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer style={{ backgroundColor: '#022fd3' }}>
                                    <Container className="text-center">
                                        <a href="#" className="btn btn-link w-100">  
                                            <Link to="/ColomboTour" style={{ color: 'white' }}>Click here for more information!</Link>                                 
                                        </a>
                                    </Container>
                                </Card.Footer>
                            </Card>
                        </Col>

                        <Col className="p-1 ml-2" xl={3} lg={3} md={2} sm={4} xs={6}>
                            <Card style={{ width: '20rem', margin: '10px' }}>
                                <Card.Img variant="top" src={imagekan} style={{ borderRadius: '0', objectFit: 'cover' }} />
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <Card.Title>Kandy Tour with your family</Card.Title>
                                            <i className='fa fa-home'></i>&nbsp;
                                            <i className='fa fa-bed'></i>&nbsp;
                                            <i className='fa fa-car'></i>&nbsp;
                                            <i className='fa fa-cutlery'></i>
                                        </div>
                                        <div>
                                            <Badge bg="success">8 Days</Badge>
                                            <Rating name="size-small" defaultValue={5} size="small" readOnly/>
                                        </div>
                                    </div>
                                    <Card.Text className="text-center">
                                        Visit Kandy for a once in a lifetime experience with your loved ones
                                    </Card.Text>
                                    <Card.Text>
                                        <Container className="pkg-price">
                                                Price - Rs. 160,000 (GBP 422)                                           
                                        </Container>
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer style={{ backgroundColor: '#022fd3' }}>
                                    <Container className="text-center">
                                        <a href="#" className="btn btn-link w-100">  
                                            <Link to="/KandyTour" style={{ color: 'white' }}>Click here for more information!</Link>                                 
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

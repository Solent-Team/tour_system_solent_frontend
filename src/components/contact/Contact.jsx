import React, { Component, Fragment } from 'react'
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';

class Contact extends Component {
  render() {
    return (
     
     <Fragment>
     
     <Container className="py-5" fluid={true} >
  
                    <h1 className="text-center"style={{color:'#020221'}}>Contact Us</h1>
                    <Row className="mt-4">
                        <Col md={6} lg={4} xl={12} className="mb-4">
                           
                            <p className='text-center'style={{fontWeight:'light', fontSize:'20px', color:'##252929'}}>We value your feedback and are here to assist you. If you have any questions, suggestions, or concerns, 
                                    please feel free to reach out to us. Our dedicated team is ready to provide the support you need.
                                    If you prefer, you can use the contact form below to send us a message directly. Please provide us with 
                                    your name, email address, and a brief description of your inquiry. We will get back to you as soon as possible.
                                    We value your privacy and assure you that any information you provide will be kept confidential and used solely 
                                    for the purpose of assisting you. 
                                    Thank you for choosing our Solent Travels. We look forward to hearing from you and assisting you with your 
                                     travel needs.</p>
                        </Col>
                   
    <div style={{ position: 'relative',top:'100%', left:'4% '}} className='col-md-4 col-lg-4'>
      <Card style={{ width: '30rem', height: '35rem',backgroundColor:'#9fd2d6d0' }}>
        <Card.Header className="text-center"style={{ fontSize:'20px'}} >Write to Us</Card.Header>
      <Card.Body>
        <Card.Text>
        <Form id='bookingform'>
                                  <Form.Group className="mb-1" controlId="name">
                                     <Form.Label>Name <span class="text-danger">*</span></Form.Label>
                                       <Form.Control onChange={this.onchangename} type="text" placeholder="Enter your name" 
                                       reuired />
                                  
                                           </Form.Group>

                                            <Form.Group className="mb-3" controlId="email">
                                                <Form.Label>Email <span class="text-danger">*</span></Form.Label>
                                                <Form.Control onChange={this.onchangeemail} type="email" placeholder="Enter your email" 
                                                
                                                quired />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="phone">
                                                <Form.Label>Phone <span class="text-danger">*</span></Form.Label>
                                                <Form.Control onChange={this.onchangephone} type="text" placeholder="Enter your phone number" 
                                                ruired />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="text">
                                                <Form.Label>Your Massage <span class="text-danger">*</span></Form.Label>
                                                <Form.Control as="textarea" rows={5} placeholder="Leave Your Massage" reuired />
                                            </Form.Group>

                                            </Form>
        </Card.Text>
        <Button variant="primary" style={{float:'right', fontSize:'16px', fontWeight: 'bold'}}>Submit</Button>
      </Card.Body>
    </Card>
    </div>
    <div class="col-lg-8">


<div id="map-container-google-11" div class="z-depth-1-half map-container-6"style={{ height:'400px'}}>
  <iframe src="https://www.google.com/maps/embed/v1/place?q=a+24,+1+Galle+Road,+Colombo+03,+Colombo,+Sri+Lanka&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
    frameborder="1" style={{ border:'20px', height:'400px',width:'100%'}} allowfullscreen></iframe>


 </div>

<br />
<hr />

<div class="row text-center" style={{fontWeight:'bold', fontSize:'20px'}}>
  <div class="col-md-4">
    <a class="btn-floating blue accent-1"> <i class="material-icons">Location_on</i></a>

    <p>A 24/1, Galle road, Colombo 03,</p>
    <p>Sri Lanka</p>
  </div>

  <div class="col-md-4">
    <a class="btn-floating blue accent-1"><i class="material-icons">Phone</i ></a>
    <p>Hotline: +94771844319</p>
    <p>
    <i/> Phone  : 011 4711 541</p>
  </div>

  <div class="col-md-4">
    <a class="btn-floating blue accent-1"><i class="material-icons">mail</i></a>
    <p>solent_tour@gmail.com</p>

  </div>
  </div>
  </div>



    </Row>
    
    </Container>
     </Fragment>

   
    )
  }
}

export default Contact

import React, { Component, Fragment, useState } from 'react'
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import image3 from '../../asset/images/Tour1.jpg'
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import PersonIcon from '@mui/icons-material/Person';
import BedIcon from '@mui/icons-material/Bed';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CarRentalIcon from '@mui/icons-material/CarRental';
import Card from 'react-bootstrap/Card';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import axios from 'axios';
import APICALL from '../../api/APICALL';
import Alert from 'react-bootstrap/Alert';

class TourDetails extends Component {

    constructor() {
        super()
        this.state = {
            amount: 250,
            name: "",
            email: "",
            phone: "",
            arrivalDate: "",
            noofTravellers: "",
            createddate: new Date().toLocaleDateString(),
            orderid: 1223,
            paymentstatus: 1,
            tourpackages: "Sri Lanka Vacation 9 Days",
            bookingConfirmed: false


        }
    }

    onchangename = (event) => {
        let name = event.target.value;
        // alert(name);
        this.setState({ name: name })
    }

    onchangeemail = (event) => {
        let email = event.target.value;
        this.setState({ email: email })
    }

    onchangephone = (event) => {
        let phone = event.target.value;
        this.setState({ phone: phone })
    }

    onchangearrivalDate = (event) => {
        let arrivalDate = event.target.value;
        this.setState({ arrivalDate: arrivalDate })
    }

    onchangenoofTravellers = (event) => {
        let noofTravellers = event.target.value;
        this.setState({ noofTravellers: noofTravellers })
    }


    onformsubmit = (event) => {
        const { name, email, phone, arrivalDate, noofTravellers, createddate, orderid, paymentstatus } = this.state;


        let bookingform = document.getElementById('bookingform')

        const bookingData = {
            name,
            email,
            phone,
            arrivalDate,
            noofTravellers,
            createddate,
            orderid,
            paymentstatus: 1,
            oderstatus: 1,
            ammount: this.state.amount,
            tourpackages: this.state.tourpackages
        };


        axios.post(APICALL.BookingConfirm, bookingData)
            .then((response) => {
                if (response.status === 200) {
                    this.setState({ bookingConfirmed: true }, () => {
                        bookingform.reset();
                    });
                }
            })
            .catch((error) => {
                console.error(error);
                // Handle error or display error message
            });
        // event.preventDefault();

    }


    render() {
        return (
            <Fragment>

                <Container >

                    <Col md={12} >
                        <h2>Sri Lanka Vacation 9 Days</h2>
                        <img src={image3} className='w-100' />
                        <br></br>
                        <br />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                            Lorem Ipsum passages, and more recently with
                            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                        <h3>Activities - Day 01</h3>

                    </Col>

                    <div>
                        <Row>
                            <Col md={8}>

                                {/* Activities - Day 01 */}

                                <Row>
                                    <Col md={8}>
                                        <ul>
                                            <li>Arrival at Colombo Sri Lanka (Bandaranaike International airport)</li>
                                            <li>Enjoy a warm welcome by our Olanka representative and driver at the airport</li>
                                            <li>Proceed to the ancient city of Sigiriya</li>
                                            <li>Enroute visit to Pinnawala elephant orphanage</li>
                                            <li>Check-in at the antique-style hotel and relax </li>
                                            <li>Have a chill Sri Lankan Lion Beer & wine down</li>
                                            <li>Enjoy your first Sri Lankan buffet dinner at the hotel</li>
                                            <li>Overnight stay at the hotel</li>
                                        </ul>
                                    </Col>

                                    <Col md={4}>
                                        < BedIcon color="primary" />
                                        <NetworkWifiIcon color="primary" />
                                        <PersonIcon color="primary" />
                                        <PersonIcon color="primary" />
                                        <RestaurantIcon color="primary" />
                                        <CarRentalIcon color="primary" />
                                    </Col>
                                </Row>


                                {/* Activities - Day 02 */}

                                <Row>
                                    <Col md={8}>
                                        <h3>Activities - Day 02</h3>
                                        <ul>
                                            <li>Wakeup to a beautiful morning in Sigiriya</li>
                                            <li>Appetizing buffet Breakfast at the hotel</li>
                                            <li>Proceed to climb the ancient Sigiriya rock fortress</li>
                                            <li>Experience a memorable evening walk through a beautiful Sri Lanka village</li>
                                            <li>A traditional Sri Lankan village experience</li>
                                            <li>Take a traditional boat ride through the village</li>
                                            <li>Enjoy a soothing Ayurveda spa session</li>
                                            <li>Enjoy a grand buffet dinner with authentic Sri Lankan food</li>
                                        </ul>
                                    </Col>

                                    <Col md={4}>
                                        < BedIcon color="primary" />
                                        <NetworkWifiIcon color="primary" />
                                        <PersonIcon color="primary" />
                                        <PersonIcon color="primary" />
                                        <RestaurantIcon color="primary" />
                                        <CarRentalIcon color="primary" />
                                    </Col>
                                </Row>


                                {/* Activities - Day 03 */}

                                <Row>
                                    <Col md={8}>
                                        <h3>Activities - Day 03</h3>
                                        <ul>
                                            <li>Wakeup to the beautiful bird chirpings in Sigirya</li>
                                            <li>Savor an unending buffet breakfast at the hotel</li>
                                            <li>Taste sweet tropical fruits in the paradise of Sri Lanka</li>
                                            <li>Walk through the village in your way to the Spice village</li>
                                            <li>Get to know how best spices in the world are grown and made</li>
                                            <li>Visit the famous Coconut House</li>
                                            <li>Know how Sri Lankans make full use of the coconut tree</li>
                                            <li>Later check in to your hotel in Kandy & refresh</li>
                                            <li>Visit the most famous Temple of Tooth in Kandy</li>
                                            <li>Enjoy the evening with a cultural dance</li>
                                            <li>Taste Sri Lanka through a grand buffet dinner</li>
                                            <li>Take a walk around the Kandy lake at night</li>
                                            <li>Wine down your day with a Sri Lankan Lion beer</li>
                                        </ul>
                                    </Col>

                                    <Col md={4}>
                                        < BedIcon color="primary" />
                                        <NetworkWifiIcon color="primary" />
                                        <PersonIcon color="primary" />
                                        <PersonIcon color="primary" />
                                        <RestaurantIcon color="primary" />
                                        <CarRentalIcon color="primary" />
                                    </Col>
                                </Row>

                            </Col>



                            {/* User enquires  */}
                            <Col md={4}>
                                <Card>
                                    <Card.Header as="h5">Book Now</Card.Header>
                                    {this.state.bookingConfirmed && (
                                        <Alert variant="success">Booking Confirmed</Alert>
                                    )}
                                    <Card.Body>
                                        <Form id='bookingform'>
                                            <Form.Group className="mb-3" controlId="name">
                                                <Form.Label>Name <span class="text-danger">*</span></Form.Label>
                                                <Form.Control onChange={this.onchangename} type="text" placeholder="Enter your name" required />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="email">
                                                <Form.Label>Email <span class="text-danger">*</span></Form.Label>
                                                <Form.Control onChange={this.onchangeemail} type="email" placeholder="Enter your email" required />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="phone">
                                                <Form.Label>Phone <span class="text-danger">*</span></Form.Label>
                                                <Form.Control onChange={this.onchangephone} type="text" placeholder="Enter your phone number" required />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="phone">
                                                <Form.Label>country <span class="text-danger">*</span></Form.Label>
                                                <Form.Control  type="text" placeholder="Living country" required />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="phone">
                                                <Form.Label>Arrival Date: <span class="text-danger">*</span></Form.Label>
                                                <Form.Control onChange={this.onchangearrivalDate} type="date" placeholder="" required />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="phone">
                                                <Form.Label>No of Travellers:</Form.Label>
                                                <Form.Control onChange={this.onchangenoofTravellers} type="number" placeholder="" min={1} />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="phone">
                                            <Form.Label>Select Hotel</Form.Label>
                                            <Form.Select>
                                            
                                                <option>Default select</option>
                                                <option>Default select</option>
                                                <option>Default select</option>
                                                <option>Default select</option>
                                            </Form.Select>

                                            </Form.Group>
                                            

                                            <PayPalScriptProvider options={{ "client-id": "AXsalEQ6ngmBcM5AjMgSG9rm9QYkzAqZDb0ycqQjUDdqShnjXZQ7gz8qq7i5Dc4RQ8teV7-4GmR_vwL5" }}>
                                                <PayPalButtons
                                                    createOrder={(data, actions) => {
                                                        return actions.order
                                                            .create({
                                                                purchase_units: [
                                                                    {
                                                                        amount: {
                                                                            value: this.state.amount,
                                                                        },
                                                                    },
                                                                ],
                                                            })
                                                            .then((orderId) => {
                                                                // Your code here after create the order

                                                                this.setState({ orderid: orderId }, () => {
                                                                    this.onformsubmit(); // Call onformsubmit function
                                                                });
                                                                return orderId;
                                                            });
                                                    }}

                                                />
                                            </PayPalScriptProvider>
                                        </Form>
                                    </Card.Body>
                                </Card>

<br />
                                <Card>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
                            </Col>
                        </Row>
                    </div>



                </Container>
            </Fragment>
        )
    }
}

export default TourDetails

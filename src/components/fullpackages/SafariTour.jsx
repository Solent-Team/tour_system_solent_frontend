import React, { Component, Fragment, useState } from 'react'
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import safaritourimg from '../../asset/images/safaritour.jpg'
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

class SafariTour extends Component {

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
            tourpackages: "Sri Lanka Safari Tour",
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
                        <h2>Sri Lanka Safari Tour</h2>
                        <img src={safaritourimg} className='w-100' />
                        <br></br>
                        <br />
                        <p style={{ textAlign: 'justify' }}>The second-largest and most visited national park in Sri Lanka is the
                            Udawalawe National Park, which is blessed with a vast expanse of woodland, grassland, and lagoons surrounding 
                            the Indian Ocean, is a beautiful and scenic destination among our Sri Lanka vacation packages. 
                            This is where you may encounter everything from big giants to the smallest members of 
                            the animal kingdom, as well as have an unforgettable wildlife experience! Freshwater lakes, 
                            beaches, rocky outcrops, verdant plains, and rainforests are among the ecosystems found in the park. 
                            This location is one of the world's most famous sites for observing the elusive leopard, 
                            which loves to live in the mountains. It is popular with travelers from all over the globe 
                            as a must-see destination on Sri Lanka tours.</p>

                        <h3>Activities - Day 1</h3>

                    </Col>

                    <div>
                        <Row>
                            <Col md={8}>

                                {/* Activities - Day 01 */}

                                <Row>
                                    <Col md={8}>
                                        <ul>
                                            <li>Arrival at Colombo, Sri Lanka (Bandaranaike International airport)</li>
                                            <li>Enjoy a warm welcome by our Solent Tours representative and driver at the airport</li>
                                            <li>Proceed to the Udawalawe National Park Hotel</li>
                                            <li>Enroute visit to elephant orphanage</li>
                                            <li>Check-in time</li>
                                            <li>Have a chill Sri Lankan Lion Beer & wine down</li>
                                            <li>Enjoy your first Sri Lankan buffet dinner at the Hotel</li>
                                            <li>Rest up at the Hotel</li>
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
                                        <h3>Activities - Day 2</h3>
                                        <ul>                                  
                                            <li>Appetizing buffet Breakfast at the Hotel</li>
                                            <li>Proceed to look around at the park</li>
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
                                        <h3>Activities - Day 3</h3>
                                        <ul>
                                            <li>Begin your day with a lavish breakfast buffet</li>
                                            <li>Try a warm cup of Sri Lankan tea</li>
                                            <li>Taste sweet tropical fruits in the paradise of Sri Lanka</li>
                                            <li>Take a 4x4 jungle safari at the Udawalawa National Park</li>
                                            <li>Visit the popular elephant sanctuary</li>
                                            <li>Spend time with the elephants</li>
                                            <li>VWalk around the village and mingle with the friendly locals</li>
                                            <li>Enjoy the evening with a cultural dance</li>
                                            <li>Take a walk around the Kandy lake at night</li>
                                            <li>Return to the Udawalawa Hotel and unwind</li>
                                            <li>Enjoy the Sri Lankan Lion beer</li>
                                            <li>Taste Sri Lanka through a grand buffet dinner</li>
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
                                                <option>Select a Hotel from the List:</option>
                                                <option>Hotel Jordan</option>
                                                <option>The Udawalawe Hotel</option>
                                                <option>Hotel Lotus</option>
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
                            </Col>
                        </Row>
                    </div>



                </Container>
            </Fragment>
        )
    }
}

export default SafariTour

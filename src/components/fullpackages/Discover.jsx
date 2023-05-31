import React, { Component, Fragment, useState } from 'react'
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import discover2img from '../../asset/images/discover2.jpg'
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

class Discover extends Component {

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
            tourpackages: "Discover Sri Lanka",
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
                        <h2>Discover Sri Lanka</h2>
                        <img src={discover2img} className='w-100' />
                        <br></br>
                        <br />
                        <p style={{ textAlign: 'justify' }}>Early Arab traders referred to Sri Lanka as "Serendib," 
                        which inspired the English term "serendipity." 
                        Explore beautiful castles, historic towns, and exquisitely adorned Buddhist temples 
                        on an excursion across this accidental Indian Ocean isle. Take a stroll through 
                        aromatic spice gardens and verdant tea plantations, sampling world-renowned Ceylon 
                        tea directly at the source, and go on safari in two recognized national parks to 
                        spot elephants and leopards.</p>

                        <h3>Activities - Day 1 (Colombo City)</h3>

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
                                            <li>Explore the Colombo city by tuk-tuk in 4 hours with a local guide</li>
                                            <li>Visit the beautiful Gangaramaya Temple in Colombo city</li>
                                            <li>Shop at the best shopping boutiques of Sri Lanka</li>
                                            <li>Head down the narrow streets, and visit popular areas the way locals do</li>
                                            <li>Experience the Colombo night life & pubs</li>
                                            <li>Taste the Sri Lankan cocktails</li>
                                            <li>Overnight stay in beautiful kingsbury hotel</li>
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
                                        <h3>Activities - Day 2 (Mirissa)</h3>
                                        <ul>                                  
                                            <li>Have a Sri Lankan breakfast buffet at the hotel</li>
                                            <li>Proceed to the beautiful Mirissa beach</li>
                                            <li>Check in to the beach hotel</li>
                                            <li>Surf lovers can have a surf session</li>
                                            <li>Whale & dolphin watching Excursion</li>
                                            <li>Enjoy the beautiful sunset by the beach</li>
                                            <li>Learn how to make the famous Sri Lankan Crab Curry</li>
                                            <li>Enjoy the grand seafood dinner buffet</li>
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
                                        <h3>Activities - Day 3 (Ella)</h3>
                                        <ul>                                  
                                            <li>Wake up to the cold and misty mountains in Nuwara Eliya</li>
                                            <li>Start your day with a refreshing cup of Ceylon tea</li>
                                            <li>Take a morning stroll around the tea villages</li>
                                            <li>Enjoy your breakfast buffet of both local and foreign cuisine</li>
                                            <li>Check out and proceed to the city of Ella</li>
                                            <li>Try out our famous strawberries & fresh milkshakes</li>
                                            <li>Experience a more breathtaking train ride in Ella</li>
                                            <li>Walk through all the hill country vegetation</li>
                                            <li>Check in at a lovely hotel in Ella & refresh</li>
                                            <li>Visit the Ella gap</li>
                                            <li>Visit the area of the Mini Adam’s peek in Ella</li>
                                            <li>Visit the world famous Nine Arch bridge</li>
                                            <li>Enjoy a warm and grand dinner buffet in the cold night</li>
                                            <li>Overnight stay in the Ella hotel overlooking mountains</li>
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

                                {/* Activities - Day 04 */}

                                <Row>
                                    <Col md={8}>
                                        <h3>Activities - Day 4 (Nuwara-Eliya)</h3>
                                        <ul>                                  
                                            <li>Wake up to the warm morning in Sigiriya</li>
                                            <li>Start your day with a relaxing yoga session</li>
                                            <li>Enjoy a filling breakfast buffet at the hotel</li>
                                            <li>Check out from the hotel</li>
                                            <li>Travel to Nuwara Eliya in the hill country side</li>
                                            <li>Know how the world famous Sri Lankan gems are made</li>
                                            <li>Visit the handicraft and handmade-batik shops</li>
                                            <li>Visit the tea estate and pluck your own tea bag</li>
                                            <li>Get to know how the world famous Ceylon tea is made</li>
                                            <li>Try your hot cup of Ceylon tea while observing the emerald tea gardens</li>
                                            <li>Check in at a colonial style hotel Nuwara Eliya</li>
                                            <li>Enjoy the night with a cold Sri Lankan Lion beer</li>
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

                                {/* Activities - Day 05 */}

                                <Row>
                                    <Col md={8}>
                                    <h3>Activities - Day 5 (Yala)</h3>
                                        <ul>                                  
                                            <li>Proceed to view the wildlife in the Yala National Park</li>
                                            <li>Check in to the tropical hotel in Yala</li>
                                            <li>A Culinary experience - Learn how to make the famous Sri Lanka chicken curry</li>
                                            <li>In the evening, get ready for the 4 x 4 jungle safari</li>
                                            <li>Leopard sightings</li>
                                            <li>Enjoy the grand dinner buffet at the hotel</li>
                                            <li>Overnight stay in the Yala hotel</li>
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
                                                <option>Hotel Kingsbury</option>
                                                <option>The Shangrila</option>
                                                <option>Hotel Galadari</option>
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

export default Discover

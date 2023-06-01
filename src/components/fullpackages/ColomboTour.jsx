import React, { Component, Fragment, useState } from 'react'
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import colombotourimg from '../../asset/images/colombotour.jpg'
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

class ColomboTour extends Component {

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
            tourpackages: "Colombo Tour with your family",
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
                        <h2>Colombo Tour with your family</h2>
                        <img src={colombotourimg} className='w-100' />
                        <br></br>
                        <br />
                        <p style={{ textAlign: 'justify' }}>Acclaimed as the largest economic corridor and tourist 
                        destination in the island nation of Sri Lanka, Colombo is a cosmopolitan gateway 
                        to the wonders of colonial heritage and a melting pot of races and religions. 
                        Join over 1.9 million tourists visiting Colombo annually, explore incredible diversity, 
                        cuisines, eclectic architecture and cultural tradition with Solent Tour's Colombo tour package</p>

                        <h3>Activities - Day 1 </h3>

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
            <li>Proceed to check in at the Hotel</li>
            <li>Lunch at Shangri-la</li>
            <li>Proceed to visit Ape Gama, which is a Replica of Traditional Sri Lankan Village</li>
            <li>Drive alongside Diyawanna Lake through Parliament Drive where you can see the Parliament of Sri Lanka</li>
            <li>Diyatha Uyana (Park) & Diyawanna Oya (Lake)</li>
            <li>Visit the National Zoological Gardens of Sri Lanka</li>
            <li>Visit Gangaramaya (Buddhist) Temple, which is one of the most important temples in Colombo</li>
            <li>Visit the Independence Memorial Hall & Museum</li>
            <li>Visit the National Museum of Colombo</li>
            <li>Visit the Viharamahadevi Park (formerly Victoria Park)</li>
            <li>Return to the hotel for dinner and overnight stay</li>
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
        <h3>Activities - Day 2 </h3>
        <ul>                                  
            <li>Freshen up and have Breakfast at the hotel</li>
            <li>Visit the Town Hall of Colomb. It is the headquarters of the Colombo Municipal Council and the office of the Mayor of Colombo</li>
            <li>Visit the Premadasa & Co. Main Store & Gem Museum</li>
            <li>Visit the Nelum Pokuna Mahinda Rajapaksa Theatre</li>
            <li>Visit Laksala State Gift and Souvenir Boutique</li>
            <li>Visit the Colombo Lotus Tower</li>
            <li>Visit Pettah Market also called Manning Market</li>
            <li>Return to the hotel for dinner and overnight stay</li>
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
        <h3>Activities - Day 3 </h3>
        <ul>
            <li>Freshen up and have Breakfast at the hotel</li>
            <li>Visit the Jami-Ul-Alfar (Red) Mosque</li>
            <li>Visit the Sri Ponnambalawaneswarar Devastanam Kovil, Kotahena</li>
            <li>Visit the St Anthony's Shrine</li>
            <li>Visit the Dutch Hospital Shopping Precinct</li>
            <li>Visit Galle Face Green</li>
            <li>Shopping at One Galle Face</li>
            <li>Return to the hotel for dinner and overnight stay</li>
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
                                                <option>Hotel Pegasus</option>
                                                <option>The Shangrila</option>
                                                <option>Hotel Jetwing</option>
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

export default ColomboTour

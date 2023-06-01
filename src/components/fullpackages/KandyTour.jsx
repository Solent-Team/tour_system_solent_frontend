import React, { Component, Fragment, useState } from 'react'
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import kandytourimg from '../../asset/images/kandytour.jpg'
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

class KandyTour extends Component {

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
            tourpackages: "Kandy Tour with your family",
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
                        <h2>Kandy Tour with your family</h2>
                        <img src={kandytourimg} className='w-100' />
                        <br></br>
                        <br />
                        <p style={{ textAlign: 'justify' }}>An essential part of Sri Lanka trips, being the home to the
                        sacred relic of the Buddhist faith is located above sea level near the gigantic Everest and 
                        Hunnasgiriya Mountain Ranges along with a chilled atmosphere and a picturesque view! 
                        On our way to Kandy, you will witness the sight of elephants marching to take their 
                        daily bath ritual at the Pinnawala Elephant Orphanage, which is definitely a lifetime experience. 
                        After arrival, you will be taken on a remarkable tour around the city surrounded by 
                        lush greenery and mountains. The cultural dance which is a truly unique aspect of Sri Lanka, 
                        dressed in different costumes and drums highlights our rich culture and you will be able 
                        to catch a glimpse of it</p>

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
            <li>Proceed to Kandy </li>
            <li>While on tour to Kandy, we will visit the Pinnawala elephant Orphanage</li>
            <li>Proceed to Kandy and visit the Temple of the Tooth Relic</li>
            <li>Visit the Gem Museum</li>
            <li>Visit Wood Carving factory</li>
            <li>Visit the Batik Factory</li>
            <li>Return to the hotel and have an overnight stay</li>
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
            <li>Visit the Royal Botanical Gardens, Peradeniya</li>
            <li>Have a full Evening City tour of Kandy</li>
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
            <li>Visit the Kandy War Cemetery</li>
            <li>Visit the Kandy Lake Club - Cultural Dance Show</li>
            <li>Visit the Ceylon Tea Museum</li>
            <li>Visit the Kandy View Point</li>
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
                                                <option>Rivendell Hotel</option>
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

export default KandyTour

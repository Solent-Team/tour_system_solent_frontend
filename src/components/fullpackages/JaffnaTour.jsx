import React, { Component, Fragment, useState } from 'react'
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import jaffnatourimg from '../../asset/images/jaffnatour.jpg'
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

class JaffnaTour extends Component {

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
            tourpackages: "Jaffna Tour with your family",
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
                        <h2>Jaffna Tour with your family</h2>
                        <img src={jaffnatourimg} className='w-100' />
                        <br></br>
                        <br />
                        <p style={{ textAlign: 'justify' }}>This tour gives you the opportunity to experience all 
                        the must-see destinations of the Northern Sri Lanka. Heading further afield than the 
                        regular Jaffna trips, we take you to the inner countryside of the peninsula and the 
                        northern most landmarks of the country.</p>

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
            <li>Proceed to Anuradhapura</li>
            <li>Lunch at Anuradhapura</li>
            <li>Proceed to Iranamadu</li>
            <li>Thereafter, proceed to Kilinochchi</li>
            <li>Visit the War Memorial Monument at Kilinochchi</li>
            <li>Proceed to Elephant Pass</li>
            <li>Continue the journey to Jaffna</li>
            <li>On arrival in Jaffna, check in at the hotel</li>
            <li>In the evening, visit the Naga Vihara Temple</li>
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
            <li>Breakfast at the hotel</li>
            <li>Do a sightseeing tour of Jaffna city to witness the clock tower, Jaffna Library and the Duraiappa Stadium</li>
            <li>Visit the Nallur Kandaswamy Kovil</li>
            <li>Proceed to Chunnakam passing the Jaffna University. Visit the ruins of the historical Kadurugoda Viharaya Buddhist Temple complex</li>
            <li>Proceed to Point Pedro en route visiting the Bottomless well at Nilavarai and grapes and vegetable farming and wine making</li>
            <li>In Point Pedro, visit the Light House and its beach including the Northernmost point of Sri Lanka</li>
            <li>Lunch at Thal Sevana Resort, Kankasanthurai</li>
            <li>Visit the Naguleswaram Kovil and the Sacred Water Spring at Keerimalai</li>
            <li>Spend time with the welcoming villagers</li>
            <li>Proceed to Dambakola Patuna to visit the Sri Sangamitta Viharaya</li>
            <li>Proceed to the Casurina Beach of Karainagar</li>
            <li>Return to Jaffna</li>
            <li>Visit the Gurunagar Fishing Harbour and the fish market</li>
            <li>Return to the hotel</li>
            <li>Do optional shopping visits in the town</li>
            <li>Dinner and overnight stay at the hotel</li>
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
            <li>Freshen up and have Breakfast at the hotel.</li>
            <li>Visit the Jaffna Fort</li>
            <li>Proceed to Kurikattuwan Jetty to take a ferry to Nagadeepa Island (Nainativu)</li>
            <li>Visit the Nagadeepa Viharaya</li>
            <li>Visit the Nagapooshani Amman Kovil</li>
            <li>Return to Jaffna</li>
            <li>Lunch at the hotel</li>
            <li>Check out of the hotel</li>
            <li>Proceed to Colombo at 1:00 pm</li>
            <li>Arrive at Colombo by 8:00 pm</li>
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
                                                <option>THotel Selvam</option>
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

export default JaffnaTour

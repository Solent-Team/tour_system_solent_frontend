import React, { Component, Fragment, useState } from 'react'
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import Honeymoonimg from '../../asset/images/honeymoon.jpg'
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

class Honeymoon extends Component {

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
            tourpackages: "Honeymoon in Sri Lanka",
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
                        <h2>Honeymoon in Sri Lanka</h2>
                        <img src={Honeymoonimg} className='w-100' />
                        <br></br>
                        <br />
                        <p style={{ textAlign: 'justify' }}>A question for newlyweds: Is your first priority to find a 
                        place that will make those precious days of your honeymoon genuinely memorable? 
                        If this is the case, Sri Lanka should not be neglected. A honeymoon in Sri Lanka, 
                        like its spices, has so many flavors in terms of culture, natural beauty, 
                        and friendly and lovely people that it is difficult to resist. 
                        There is so much to see and see here that you will never tire of it. 
                        There is something for every type of couple, from romantic strolls on 
                        the beach to daring hikes in the mountains. So, here are some incredible 
                        honeymoon destinations in Sri Lanka to get you thinking about how you want your days to unfold.</p>

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
            <li>Proceed to the ancient kingdom of Anuradhapura</li>
            <li>Anuradhapura offers a historic city tour</li>
            <li>Later, while observing the lake from the hotel, sip Sri Lankan Lion beer</li>
            <li>At the hotel, you may enjoy a traditional Sri Lankan large supper buffet</li>
            <li>Stay the night in your tranquil refuge in Anuradhapura</li>
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
        <h3>Activities - Day 2 (Polonnaruwa City)</h3>
        <ul>                                  
            <li>On your first morning in paradise, wake up to the sound of birds singing</li>
            <li>At the hotel, enjoy a colorful breakfast buffet</li>
            <li>Check out and travel to Polonnaruwa</li>
            <li>Try a cup of Ceylon tea, the greatest tea in the world</li>
            <li>Tour the historic city of Polonnaruwa</li>
            <li>Explore Sri Lanka's incredible 2500 years of documented history</li>
            <li>Check into the hotel in the countryside</li>
            <li>After that, pedal around Polonnaruwa village</li>
            <li>Spend time with the welcoming villagers</li>
            <li>View the gorgeous sunset over the lake</li>
            <li>Get an Ayurvedic spa treatment</li>
            <li>At the hotel, enjoy a traditional Sri Lankan supper buffet</li>
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
        <h3>Activities - Day 3 (Sigiriya)</h3>
        <ul>
            <li>Wake up to a warm morning in Polonaruwa</li>
            <li>Learn the basics of meditation </li>
            <li>A range of Tropical fruits to energize your whole day</li>
            <li>Enjoy a delicious breakfast buffet that overlooks the lake</li>
            <li>Proceed to the Sigiriya city</li>
            <li>On the way, stop at the Minneriya National Park</li>
            <li>Witness the largest Elephant gathering</li>
            <li>Check in at the hotel</li>
            <li>Later visit the famous Sigiriya rock fortress</li>
            <li>Relax with a chill Sri Lankan beer - Lion Larger</li>
            <li>Enjoy a perfect dinner buffet full of local delights</li>
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
        <h3>Activities - Day 4 (Nuwara Eliya)</h3>
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
        <h3>Activities - Day 5 (Ella)</h3>
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

{/* Activities - Day 06 */}

<Row>
    <Col md={8}>
        <h3>Activities - Day 6 (Yala)</h3>
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

{/* Activities - Day 07 */}

<Row>
    <Col md={8}>
        <h3>Activities - Day 7 (Mirissa)</h3>
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

export default Honeymoon

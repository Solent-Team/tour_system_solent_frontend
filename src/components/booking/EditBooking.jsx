import axios from 'axios';
import React, { Component, Fragment } from 'react'

import withRouter from '../../withRouter'
import APICALL from '../../api/APICALL';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';


class EditBooking extends Component {

    constructor() {
        super();
        this.state = {
            bookingData: [],
            booking_id: [],
            name:"",
            email:"",
            phone: "",
            noofTravellers:"",
            tourpackages:"",
        }
    }


    getbookingdata = () => {
        let id = this.props.params.id
        console.log("idd" + id)
        axios.get(APICALL.BookingDetailsById(id))
            .then(response => {
                this.setState({ bookingData: response.data })

            }).catch(error => {
                console.log(error)
            })

    }

    componentDidMount() {
        this.getbookingdata();
    }

    formSubmit = (e) => { 
        e.preventDefault();
        let id = this.props.params.id

        const data = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            noofTravellers: this.state.noofTravellers,
            tourpackages: this.state.tourpackages,
        }

        axios.put(APICALL.BookingDetailsUpdateById(id), data)
        .then(response => {
            alert("Data Updated")

        }) .catch(error => {
            console.error("Error updating data:", error);
          });
    }
   



    render() {
        return (


            <Fragment >

                <Container>
                    <Card>
                        <Card.Header>Booking Made By : {this.state.bookingData.name}</Card.Header>
                        <Card.Body>
                            <Card.Title> </Card.Title>
                            <Card.Text>
                                <Form onSubmit={this.formSubmit}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>name</Form.Label>
                                        <Form.Control  type="text" value={this.state.bookingData.name} />
                                        <Form.Control  onChange={(e) => { this.setState({ name: e.target.value }) }} type="text" placeholder='update name here' />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>email</Form.Label>
                                        <Form.Control  type="text" value={this.state.bookingData.email} />
                                        <Form.Control  onChange={(e) => { this.setState({ email: e.target.value }) }} type="text" placeholder='update email here' />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>phone</Form.Label>
                                        <Form.Control  type="text" value={this.state.bookingData.phone} />
                                        <Form.Control  onChange={(e) => { this.setState({ phone: e.target.value }) }} type="text" placeholder='update phone here' />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>arrivalDate</Form.Label>
                                        <Form.Control   type="date" value={this.state.bookingData.arrivalDate} />
                                    </Form.Group>


                                    <Form.Group className="mb-3">
                                        <Form.Label>Payment orderid</Form.Label>
                                        <Form.Control type="text" value={this.state.bookingData.orderid} />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>noofTravellers</Form.Label>
                                        <Form.Control type="number" value={this.state.bookingData.noofTravellers} />
                                        <Form.Control  onChange={(e) => { this.setState({ noofTravellers: e.target.value }) }}   type="text" placeholder='update noofTravellers here' />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>ammount</Form.Label>
                                        <Form.Control type="number" value={this.state.bookingData.ammount} />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>tourpackages</Form.Label>
                                        <Form.Control type="text" value={this.state.bookingData.tourpackages} />
                                        <Form.Control  onChange={(e) => { this.setState({ tourpackages: e.target.value }) }}   type="text" placeholder='update tourpackages here' />
                                    </Form.Group>

                                    <Form.Label>Payment Status</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option value="1" selected>Paid</option>
                                        <option value="2">Request Refund (Cancelled)</option>
                                    </Form.Select>

                                    <Form.Label>Order Status</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        <option value="1">Pending</option>
                                        <option value="2">Call and confirm</option>
                                    </Form.Select>

                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>

            </Fragment>
        )
    }
}

export default withRouter(EditBooking)

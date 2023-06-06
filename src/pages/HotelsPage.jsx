import React, { Component, Fragment } from 'react'
import { Container, Row, Form } from 'react-bootstrap'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import APICALL from '../api/APICALL';
import Table from 'react-bootstrap/Table';
import Menu from '../components/menu/Menu';
import Footer from '../components/footer/Footer';


export class HotelsPage extends Component {

    constructor() {
        super()
        this.state = {
            hotelname: "",
            hotelemail: "",
            hotelmobile: "",
            roomcount: "",
            hoteladdress: "",
            hotelDetails: []
        }
    }


    addhoteltodb = (e) => {
        e.preventDefault();
        const data = {
            hotelname: this.state.hotelname,
            hotelemail: this.state.hotelemail,
            hotelmobile: this.state.hotelmobile,
            roomcount: this.state.roomcount,
            hoteladdress: this.state.hoteladdress,
        }

        let submothoel = document.getElementById('submithotel');
        let orderForm = document.getElementById('orderForm')
        submothoel.innerHTML = "Adding to DB...";
        submothoel.disabled = true; // Disable the button

        axios.post(APICALL.Storehotel, data)
            .then(response => {
                alert("success")
                orderForm.reset()
            }).catch((error) => {
                console.error(error);
                // Handle error or display error message
            }).finally(() => {
                submothoel.disabled = false; // Enable the button
            });

    }


    componentDidMount() {
        axios.get(APICALL.Gethotels)
            .then(response => {
                this.setState({ hotelDetails: response.data })
            })
    }

    render() {

        const hotelDetails = this.state.hotelDetails;
        const data = hotelDetails.map((hotelDetails, i) => {
            return <tr key={i.toString}>
                <td>{hotelDetails.hotelid}</td>
                <td>{hotelDetails.hotelname}</td>
                <td>{hotelDetails.hotelmobile}</td>
                <td>{hotelDetails.roomcount}</td>
                <td> <Button variant="warning" >Edit</Button> &nbsp;
                <Button variant="danger" >Delete</Button> &nbsp;
                </td>
            </tr>
        })


        return (
            <Fragment>
                <Menu />

                <div style={{ marginTop: '70px', position: 'relative' }}>
                <Container>
                    <Row>
                        <Col lg={8}>
                            <Table striped>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Hotel name Name</th>
                                        <th>Hotel Number</th>
                                        <th>RoomCount </th>
                                        <th>Action </th>
                                    </tr>
                                </thead>
                                <tbody>
                                   {data}
                                </tbody>
                            </Table>
                        </Col>

                        <Col lg={4}>
                            <div className="row">
                                <Form id='orderForm' onSubmit={this.addhoteltodb}>
                                    <Card>
                                        <Card.Header>Add Hotels</Card.Header>
                                        <Card.Body>
                                            {/* <Card.Title>Special title treatment</Card.Title> */}
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>hotel name</Form.Label>
                                                <Form.Control onChange={(e) => { this.setState({ hotelname: e.target.value }) }} type="text" placeholder="Enter hotel name" />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>hotel hotel email</Form.Label>
                                                <Form.Control onChange={(e) => { this.setState({ hotelemail: e.target.value }) }} type="text" placeholder="Enter hotel hotel email" />
                                            </Form.Group>


                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>hotel mobile</Form.Label>
                                                <Form.Control onChange={(e) => { this.setState({ hotelmobile: e.target.value }) }} type="text" placeholder="Enter hotel mobile" />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>hotel roomcount</Form.Label>
                                                <Form.Control onChange={(e) => { this.setState({ roomcount: e.target.value }) }} type="text" placeholder="Enter hotel roomcount" />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>hotel address</Form.Label>
                                                <Form.Control onChange={(e) => { this.setState({ hoteladdress: e.target.value }) }} type="text" placeholder="Enter hotel hoteladdress" />
                                            </Form.Group>



                                            <Button variant="primary" type='submit' id='submithotel'>Submit</Button>
                                        </Card.Body>
                                    </Card>
                                </Form>

                            </div>
                        </Col>
                    </Row>
                </Container>
                </div>
                <Footer />
                
            </Fragment>
        )
    }
}

export default HotelsPage

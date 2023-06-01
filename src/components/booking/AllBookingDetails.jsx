import axios from 'axios';
import React, { Component, Fragment } from 'react'
import Table from 'react-bootstrap/Table';
import APICALL from '../../api/APICALL';
import Badge from 'react-bootstrap/Badge';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';



export class AllBookingDetails extends Component {

    constructor() {
        super();
        this.state = {
            bookingdetails: []
        }
    }


    componentDidMount() {
        this.getbookingDetails();
    }


    getbookingDetails = () => {
        axios.get(APICALL.GetAllBookingDetails)
            .then((response) => {
                let statuscode = response.status;
                if (statuscode == 200) {
                    this.setState({
                        bookingdetails: response.data,
                    })
                    console.log(this.state.bookingdetails)
                }
            }).catch((error) => {
                console.log(error)
            });
    }

    handleClose = () => {
        this.setState({ show: false })
    };

    handleShow = (event) => {
        this.setState({ show: true });

    }

    render() {

        const bookingdetails = this.state.bookingdetails;

        const data = bookingdetails.map((bookingdetails, i) => {

            let paymentStatusBadge = null;
            let oderetStatusBadge = null;

            if (bookingdetails.paymentstatus === "1") {
                paymentStatusBadge = <Badge bg="success">{bookingdetails.ammount} Paid</Badge>;
            } else if (bookingdetails.paymentstatus === "2") {
                paymentStatusBadge = <Badge bg="danger">{bookingdetails.ammount} Cancelled</Badge>;
            }
            if (bookingdetails.oderstatus === "1") {
                oderetStatusBadge = <Badge bg="info">Pending</Badge>;
            } else if (bookingdetails.oderstatus === "2") {
                oderetStatusBadge = <Badge bg="success">Done</Badge>;
            }



            return <tr key={i.toString}>
                <td>{bookingdetails.id}</td>
                <td>{bookingdetails.tourpackages}</td>
                <td>{bookingdetails.name}</td>
                <td>{bookingdetails.email}</td>
                <td>{bookingdetails.noofTravellers}</td>
                <td>{bookingdetails.arrivalDate}</td>
                <td>{paymentStatusBadge}</td>
                <td>{bookingdetails.orderid}</td>
                <td>{oderetStatusBadge}</td>
                <td>
                    <Button onClick={this.handleShow} variant="primary" >View</Button> &nbsp;
                    <Button variant="warning" >
                        <Link to={`/editbooking/${bookingdetails.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            Edit
                        </Link>
                        </Button>
                </td>
            </tr>


        })

        return (
            <Fragment>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tour Name</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>no of Travellers</th>
                            <th>arrival Date</th>
                            <th>Payment</th>
                            <th>Order ID</th>
                            <th>Verification</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {data}

                    </tbody>
                </Table>





            </Fragment>
        )
    }
}

export default AllBookingDetails

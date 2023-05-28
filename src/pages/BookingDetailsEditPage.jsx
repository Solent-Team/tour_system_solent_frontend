import React, { Component, Fragment } from 'react'
import Menu from '../components/menu/Menu'
import Footer from '../components/footer/Footer'
import EditBooking from '../components/booking/EditBooking'

class BookingDetailsEditPage extends Component {
  render() {
    return (
     <Fragment>

        <Menu />
        <div style={{ marginTop: '70px', position: 'relative' }}>
        <EditBooking />
        </div>

        <Footer />
     </Fragment>
    )
  }
}

export default BookingDetailsEditPage

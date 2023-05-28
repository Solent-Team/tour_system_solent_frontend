import React, { Component, Fragment } from 'react'
import AllBookingDetails from '../components/booking/AllBookingDetails'
import Menu from '../components/menu/Menu'
import Footer from '../components/footer/Footer'

export class AllBookingDetailsPage extends Component {
  render() {
    return (
      <Fragment>
        <Menu />

        <div style={{ marginTop: '70px', position: 'relative' }}>
        <AllBookingDetails />
        </div>
       


<Footer />
      </Fragment>
    )
  }
}

export default AllBookingDetailsPage

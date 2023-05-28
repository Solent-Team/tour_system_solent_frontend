import React, { Component, Fragment } from 'react'
import Menu from '../components/menu/Menu'
import Footer from '../components/footer/Footer'
import TourDetails from '../components/home/TourDetails'

class TourPage extends Component {
  render() {
    return (
      <Fragment>
     <Menu />
     <div style={{ marginTop: '70px', position: 'relative' }}>
          <TourDetails />
        </div>

      <Footer />
      </Fragment>
    )
  }
}

export default TourPage

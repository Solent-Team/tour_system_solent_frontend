import React, { Component, Fragment } from 'react'
import Menu from '../components/menu/Menu'
import Footer from '../components/footer/Footer'
import SafariTour from '../components/fullpackages/SafariTour'
import Popular from '../components/fullpackages/Popular'

/* This is the tour package for Safari Tour */

class TourPage extends Component {
  render() {
    return (
      <Fragment>
     <Menu />
     <div style={{ marginTop: '70px', position: 'relative' }}>
          <SafariTour /> 
        </div>

      <Footer />
      </Fragment>

      
    )
  }
}

export default TourPage

import React, { Component, Fragment } from 'react'
import Menu from '../components/menu/Menu'
import Footer from '../components/footer/Footer'
import ColomboTour from '../components/fullpackages/ColomboTour'

class ColomboTourPage extends Component {
  render() {
    return (
      <Fragment>
     <Menu />
     <div style={{ marginTop: '70px', position: 'relative' }}>
          <ColomboTour /> 
        </div>

      <Footer />
      </Fragment>

      
    )
  }
}

export default ColomboTourPage
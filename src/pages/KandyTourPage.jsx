import React, { Component, Fragment } from 'react'
import Menu from '../components/menu/Menu'
import Footer from '../components/footer/Footer'
import KandyTour from '../components/fullpackages/KandyTour'

class KandyTourPage extends Component {
  render() {
    return (
      <Fragment>
     <Menu />
     <div style={{ marginTop: '70px', position: 'relative' }}>
          <KandyTour /> 
        </div>

      <Footer />
      </Fragment>

      
    )
  }
}

export default KandyTourPage
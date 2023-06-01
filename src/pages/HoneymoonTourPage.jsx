import React, { Component, Fragment } from 'react'
import Menu from '../components/menu/Menu'
import Footer from '../components/footer/Footer'
import Honeymoon from '../components/fullpackages/Honeymoon'

class HoneymoonTourPage extends Component {
  render() {
    return (
      <Fragment>
     <Menu />
     <div style={{ marginTop: '70px', position: 'relative' }}>
          <Honeymoon /> 
        </div>

      <Footer />
      </Fragment>

      
    )
  }
}

export default HoneymoonTourPage
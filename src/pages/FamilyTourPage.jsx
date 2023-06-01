import React, { Component, Fragment } from 'react'
import Menu from '../components/menu/Menu'
import Footer from '../components/footer/Footer'
import FamilyTrip from '../components/fullpackages/FamilyTrip'

class FamilyTourPage extends Component {
  render() {
    return (
      <Fragment>
     <Menu />
     <div style={{ marginTop: '70px', position: 'relative' }}>
          <FamilyTrip /> 
        </div>

      <Footer />
      </Fragment>

      
    )
  }
}

export default FamilyTourPage
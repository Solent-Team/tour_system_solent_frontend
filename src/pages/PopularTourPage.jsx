import React, { Component, Fragment } from 'react'
import Menu from '../components/menu/Menu'
import Footer from '../components/footer/Footer'
import Popular from '../components/fullpackages/Popular'

class PopularTourPage extends Component {
  render() {
    return (
      <Fragment>
     <Menu />
     <div style={{ marginTop: '70px', position: 'relative' }}>
          <Popular /> 
        </div>

      <Footer />
      </Fragment>

      
    )
  }
}

export default PopularTourPage
import React, { Component, Fragment } from 'react'
import Menu from '../components/menu/Menu'
import Footer from '../components/footer/Footer'
import Discover from '../components/fullpackages/Discover'

class DiscoverTourPage extends Component {
  render() {
    return (
      <Fragment>
     <Menu />
     <div style={{ marginTop: '70px', position: 'relative' }}>
          <Discover /> 
        </div>

      <Footer />
      </Fragment>

      
    )
  }
}

export default DiscoverTourPage
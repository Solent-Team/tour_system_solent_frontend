import React, { Component, Fragment } from 'react'
import HowToPurchase from '../components/footer/HowToPurchase'
import Menu from '../components/menu/Menu'
import Footer from '../components/footer/Footer'

class HowToPurchasePage extends Component {
  render() {
    return (
      <Fragment>

      <Menu />

        <div style={{ marginTop: '70px', position: 'relative' }}>
          <HowToPurchase />
        </div>
<Footer />
        
      </Fragment>
    )
  }
}

export default HowToPurchasePage

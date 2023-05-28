import React, { Component, Fragment } from 'react'
import RefundPolicy from '../components/footer/RefundPolicy'
import Menu from '../components/menu/Menu'
import Footer from '../components/footer/Footer'


class RefundPolicyPage extends Component {
  render() {
    return (
      <Fragment>

        <Menu />

        <div style={{ marginTop: '70px', position: 'relative' }}>
      <RefundPolicy />
        </div>

      <Footer />

      </Fragment>
    )
  }
}

export default RefundPolicyPage

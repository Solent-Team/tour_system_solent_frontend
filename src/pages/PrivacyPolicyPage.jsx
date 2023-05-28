import React, { Component } from 'react'
import { Fragment } from 'react'
import PrivacyPolicy from '../components/footer/PrivacyPolicy'
import Menu from '../components/menu/Menu'
import Footer from '../components/footer/Footer'

class PrivacyPolicyPage extends Component {
  render() {
    return (
      <Fragment>
<Menu />

        <div style={{ marginTop: '70px', position: 'relative' }}>
      <PrivacyPolicy />
        </div>

<Footer />
      </Fragment>
    )
  }
}

export default PrivacyPolicyPage

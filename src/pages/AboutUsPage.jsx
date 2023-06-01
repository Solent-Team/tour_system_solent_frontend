import React, { Component } from 'react'
import { Fragment } from 'react'
import Menu from '../components/menu/Menu'
import Footer from '../components/footer/Footer'
import AboutUs from '../components/footer/AboutUs'

class AboutUsPage extends Component {
  render() {
    return (
      <Fragment>

        <Menu />

        <div style={{ marginTop: '70px', position: 'relative' }}>
          <AboutUs />
        </div>

        <Footer />
      </Fragment>
    )
  }
}

export default AboutUsPage

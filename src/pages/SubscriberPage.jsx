import React, { Component, Fragment } from 'react'
import Menu from '../components/menu/Menu'
import Footer from '../components/footer/Footer'
import Subscriber from '../components/subscriber/Subscriber'

class SubscriberPage extends Component {
  render() {
    return (
      <Fragment>

    <Menu />
    <div style={{ marginTop: '70px', position: 'relative' }}>
    <Subscriber />
         </div>


<Footer />
      </Fragment>
    )
  }
}

export default SubscriberPage

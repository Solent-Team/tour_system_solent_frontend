import React, { Component, Fragment } from 'react'
import Menu from '../components/menu/Menu'
import Footer from '../components/footer/Footer'
import Faq from '../components/faq/Faq'


export class FaqPage extends Component {
  render() {
    return (
      <Fragment>
<Menu />

<div style={{ marginTop: '70px', position: 'relative' }}> 

<Faq />
</div>


<Footer />
      </Fragment>
    )
  }
}

export default FaqPage

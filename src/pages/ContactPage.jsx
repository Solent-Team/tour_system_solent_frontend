import React, { Component, Fragment } from 'react'
import Menu from '../components/menu/Menu'
import Contact from '../components/contact/Contact'

class ContactPage extends Component {
  render() {
    return (
    <Fragment>
        <Menu />

        
        <div style={{ marginTop: '70px', position: 'relative' }}> 
        <Contact />
        </div>

    </Fragment>
    )
  }
}

export default ContactPage
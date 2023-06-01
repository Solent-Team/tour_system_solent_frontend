import React, { Component, Fragment } from 'react'
import Menu from '../components/menu/Menu'
import Footer from '../components/footer/Footer'
import JaffnaTour from '../components/fullpackages/JaffnaTour'

class JaffnaTourPage extends Component {
  render() {
    return (
      <Fragment>
     <Menu />
     <div style={{ marginTop: '70px', position: 'relative' }}>
          <JaffnaTour /> 
        </div>

      <Footer />
      </Fragment>

      
    )
  }
}

export default JaffnaTourPage
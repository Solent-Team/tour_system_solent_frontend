import React, { Component,Fragment } from 'react'
import Menu from '../components/menu/Menu'
import Footer from '../components/footer/Footer'
import Login from '../components/login/Login'

class LoginPage extends Component {
  render() {
    return (
     <Fragment>


<div style={{ marginTop: '70px', position: 'relative' }}>
<Menu />

</div>

       

<Login />

        <Footer />

     </Fragment>
    )
  }
}

export default LoginPage

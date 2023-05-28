import React, { Component, Fragment } from 'react'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here, such as sending the data to an API

    // Reset form fields
    this.setState({ username: '', password: '' });
  };

  render() {
    const { username, password } = this.state;

    return (
      <div className="login-container" >


        <Fragment>
          <div className="top-title">Welcome to Our Website</div> {/* Add the text here */}

          <form className="login-form" onSubmit={this.handleSubmit}>

            <div class="img"></div>
            <h2 className="login-title">Secuer Login</h2> {/* Fixed login title */}

            <label className="login-label">
              Username
              <input
                type="text"
                className="login-input"
                value={username}
                onChange={this.handleUsernameChange}
              />
            </label>
            <br />
            <label className="login-label">
              Password:
              <input
                type="password"
                className="login-input"
                value={password}
                onChange={this.handlePasswordChange}
              />
            </label>
            <br />
            <button className="login-button" type="submit">
              Login
            </button>
          </form>
        </Fragment>
      </div>
    )
  }
}

export default Login

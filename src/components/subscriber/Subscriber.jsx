import React, { Component, Fragment } from 'react'

export class Subscriber extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Perform subscriber logic here, such as sending the data to an API

    // Reset form field
    this.setState({ email: '' });
  };

  render() {
    const { email } = this.state;

    return (
      <div className="subscribe-container">

        <Fragment>
          <div className="top-title">Be the first to know about upcoming tours, cultural
            events, and immersive experiences by subscribing to our Tourism Newsletter </div>

          <form className="subscribe-form" onSubmit={this.handleSubmit}>

            <h2 className="subscribe-title">Subscribe now by providing your Email below</h2>
            <br /><br />
            <label className="subscribe-label">
              E-mail:
              <input
                type="email"
                className="subscribe-input"
                value={email}
                onChange={this.handleEmailChange}
              />
            </label>

            <button className="subscribe-button" type="submit">
              Subscribe
            </button>
          </form>
        </Fragment>
      </div>
    )
  }
}

export default Subscriber

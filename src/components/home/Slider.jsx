import React, { Component, Fragment } from 'react'
import Carousel from 'react-bootstrap/Carousel';


class Slider extends Component {
  render() {
    return (
   <Fragment>
    
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.thehansindia.com/h-upload/2019/12/27/248830-worldtour.jpg"
          alt="First slide"
          style={{ height: '700px' }}
        />
        <Carousel.Caption>
          <h3 style={{ color: 'black' }}>First slide label</h3>
          <p style={{ color: 'black' }} >Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.thehansindia.com/h-upload/2019/12/27/248830-worldtour.jpg"
          alt="Second slide"
          style={{ height: '700px' }}

        />

        <Carousel.Caption>
          <h3 style={{ color: 'black' }}>Second slide label</h3>
          <p style={{ color: 'black' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.thehansindia.com/h-upload/2019/12/27/248830-worldtour.jpg"
          alt="Third slide"
          style={{ height: '700px' }}
        />

        <Carousel.Caption>
          <h3 style={{ color: 'black' }}>Third slide label</h3>
          <p style={{ color: 'black' }}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

   </Fragment>
    )
  }
}

export default Slider

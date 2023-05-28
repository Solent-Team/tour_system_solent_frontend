import React, { Component, Fragment } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import imagefirst from '../../asset/images/firstslide.jpg'
import imagesecond from '../../asset/images/secondslide.jpg'
import imagethird from '../../asset/images/thirdslide.jpg'


class Slider extends Component {
  render() {
    return (
   <Fragment>
    
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagefirst} 
          alt="First slide"
          style={{ height: '700px' }}
        />
        <Carousel.Caption>
          <h3 style={{ color: 'white' }}>Travel to the land of greenery</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagesecond}
          alt="Second slide"
          style={{ height: '700px' }}

        />

        <Carousel.Caption>
          <h3 style={{ color: 'white' }}>Countless beaches to visit and relax</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagethird}
          alt="Third slide"
          style={{ height: '700px' }}
        />

        <Carousel.Caption>
          <h3 style={{ color: 'white' }}>Travel with us to enjoy countless more sunsets</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

   </Fragment>
    )
  }
}

export default Slider



//<p style={{ color: 'white' }} >Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
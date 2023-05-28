import React, { Component, Fragment } from 'react'
import Slider from '../components/home/Slider'
import Menu from '../components/menu/Menu'
import Packages from '../components/home/Packages'
import Footer from '../components/footer/Footer'
import HowItsWork from '../components/home/HowItsWork'
import WhyUs from '../components/home/WhyUs'
import BlogPost from '../components/home/BlogPost'
import Countries from '../components/home/Countries'

class HomePage extends Component {
  render() {
    return (
      <Fragment>

        <Menu />
        <Slider />
        <Packages />

      <HowItsWork />

      <div id="blog">
          <BlogPost />
        </div>
      <WhyUs />

<Countries />
        <Footer />
      </Fragment>
    )
  }
}

export default HomePage

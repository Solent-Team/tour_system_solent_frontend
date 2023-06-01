import React, { Component, Fragment } from 'react'
import Menu from '../components/menu/Menu'
import Footer from '../components/footer/Footer'
import BlogBeach from '../components/blogs/BlogBeach'


class BlogBeachPage extends Component {
  render() {
    return (
      <Fragment>
     <Menu />
     <div style={{ marginTop: '70px', position: 'relative' }}>
          <BlogBeach /> 
        </div>

      <Footer />
      </Fragment>

      
    )
  }
}

export default BlogBeachPage
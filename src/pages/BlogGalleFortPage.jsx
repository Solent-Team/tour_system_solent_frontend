import React, { Component, Fragment } from 'react'
import Menu from '../components/menu/Menu'
import Footer from '../components/footer/Footer'
import BlogGalleFort from '../components/blogs/BlogGalleFort'


class BlogGalleFortPage extends Component {
  render() {
    return (
      <Fragment>
     <Menu />
     <div style={{ marginTop: '70px', position: 'relative' }}>
          <BlogGalleFort /> 
        </div>

      <Footer />
      </Fragment>

      
    )
  }
}

export default BlogGalleFortPage
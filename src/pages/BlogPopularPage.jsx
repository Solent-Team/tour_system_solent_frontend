import React, { Component, Fragment } from 'react'
import Menu from '../components/menu/Menu'
import Footer from '../components/footer/Footer'
import BlogPopular from '../components/blogs/BlogPopular'


class BlogPopularPage extends Component {
  render() {
    return (
      <Fragment>
     <Menu />
     <div style={{ marginTop: '70px', position: 'relative' }}>
          <BlogPopular /> 
        </div>

      <Footer />
      </Fragment>

      
    )
  }
}

export default BlogPopularPage

import React, { Component, Fragment } from 'react'
import Menu from '../components/menu/Menu'
import Footer from '../components/footer/Footer'
import BlogElla from '../components/blogs/BlogElla'


class BlogEllaPage extends Component {
  render() {
    return (
      <Fragment>
     <Menu />
     <div style={{ marginTop: '70px', position: 'relative' }}>
          <BlogElla /> 
        </div>

      <Footer />
      </Fragment>

      
    )
  }
}

export default BlogEllaPage
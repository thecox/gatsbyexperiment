import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

class IndexPage extends Component {
  componentDidMount() {
    console.log(this.props.data);
  }

  render() {
    return (
      <Layout>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div>
          { this.props.data.allWordpressPost.edges.map(({ node }, index) => {
              return (
                <h3 key={ node.title + index}>
                  { node.title }
                </h3>
              )
            })
          }
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`

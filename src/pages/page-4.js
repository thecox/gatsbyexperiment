import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const FourthPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 4</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FourthPage

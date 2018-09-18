import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/portraits">Portraits</Link>
    <Link to="/cityscapes">Cityscapes</Link>
    <Link to="/lifestyle">Lifestyle</Link>
  </div>
)

export default IndexPage

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import Menu from "./Menu"
import Footer from "./Footer"

const Layout = ({ children }) => {

  return (
    <>
      <Menu />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `100%`,
        }}
      >
        <main>{children}</main>
        <footer>
          <Footer/>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

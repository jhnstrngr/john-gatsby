/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin, FaInstagram  } from 'react-icons/fa';

import Header from "./header"
import "./layout.css"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 0 1.0875rem 1rem;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  min-height: 80vh;
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>
          <main>{children}</main>
        </Content>
        <Footer>
        <IconContext.Provider value={{ size: "2.3rem", className: "react-icons" }}>

            <a href="https://github.com/jhnstrngr" target="_blank"><FaGithub/></a> <a href="https://www.linkedin.com/in/john-stringer-aa4771110/" target="_blank"><FaLinkedin/></a> <a href="https://www.instagram.com/johnstringerm" target="_blank"><FaInstagram/></a>
            </IconContext.Provider>

          </Footer>
      </>
    )}
  />
)



Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

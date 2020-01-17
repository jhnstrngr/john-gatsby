import React from "react"
// import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import PicOfMe from "../assets/me.svg"

const Container = styled.div`
  text-align: center;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: top;
  flex-direction: collumn;
  height: 75vh;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  line-height: 1.5rem;
  font-size: 1.3rem;
  text-align: left;

`

const Header = styled.h2`
  font-size: 2rem;
  text-align: center;
`

const AboutSection = () => (
  <StaticQuery
    query={graphql`
      query AboutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <Container>
          <Header>About</Header>
          <PicOfMe/>
          <Description></Description>
          <Description>I'm a full-stack web developer, currently in my final year of studying Internet Design (BSc) at the University of Plymouth.</Description>
          <Description>Developing in HTML, (S)CSS and JavaScript.</Description>
          <Description>Using Figma and Adobe Illustrator for UI design.</Description>
          <Description>I'm proficient in using the Adobe Creative Suite, Git (GitHub) and NPM. Currently learning React.js.</Description>
        </Container>
      </OuterContainer>
    )}
  />
)

export default AboutSection

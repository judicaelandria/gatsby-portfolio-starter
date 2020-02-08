import React from "react"
import { Heading, SideText, Skill } from "./Heading/HeadStyle"
import { Image } from "./shared/Image"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <Heading>
      <Image
        width="400px"
        height="400px"
        src={require("../images/programming.svg")}
      />
      <div
        style={{
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
          flexDirection: `column`,
          lineHeight: `.10rem`
        }}
      >
        <SideText>Hi there, I'm {data.site.siteMetadata.author}</SideText>
        <Skill>I'm a web designer</Skill>
      </div>
    </Heading>
  )
}
export default Header

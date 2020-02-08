import React from "react"
import {
  NavWrapper,
  Navbar,
  Nav,
  NavItem,
  Item,
  NavBrand,
  NavLink,
} from "./Navigation/Navigation"
import { useStaticQuery, graphql } from "gatsby"

const Menu = () => {
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
    <Navbar>
      <NavWrapper>
        <NavBrand>{data.site.siteMetadata.author}</NavBrand>
        <Nav>
          <NavItem>
            <Item>
              <NavLink>About</NavLink>
            </Item>
            <Item>
              <NavLink>Project</NavLink>
            </Item>
            <Item>
              <NavLink>Contact</NavLink>
            </Item>
          </NavItem>
        </Nav>
      </NavWrapper>
    </Navbar>
  )
}
export default Menu

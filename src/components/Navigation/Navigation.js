import styled from "styled-components"

export const Navbar = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  z-index: 999;
  box-shadow: none;
  padding: 15px 0px;
  background: none;
  justify-content: center;
  color: #fff;
  height: 5rem;
`
export const NavWrapper = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex: 1 1 0%;
  padding: 0 50px;
`
export const NavBrand = styled.div`
  flex: 1 1 0%;
  color: #2d2d2d;
  font-style: italic;
`
export const Nav = styled.nav`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  height: auto;
`
export const NavItem = styled.ul`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  list-style: none;
  display: flex;
  justify-content: center;
  margin-left: 15px;
`
export const Item = styled.li`
  font-size: 1rem;
  color: #2d2d2d;
  margin-left: 2rem;
  cursor: pointer;
  &:hover {
      color: #70d9e6;
  }
`
export const NavLink = styled.a`
  text-decoration: none;
`

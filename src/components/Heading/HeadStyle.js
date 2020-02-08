import styled from "styled-components"
import {breakpoints} from '../shared/Media'

export const Heading = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  background: #fff;
  @media (max-width: ${breakpoints.mobileMax}) {
      flex-direction: column;
      justify-content: center;
  }
`
export const SideText = styled.h1`
    font-size: 1.78rem;
    color: #2d2d2d;
    font-family: "Raleway", sans-sherif;
    font-weight: 700;
`
export const Skill = styled.h3`
  font-size: 1.3rem;
  color: #2d2d2d;
  font-family: "Open Sans", sans-sherif;
  opacity: .8;
`

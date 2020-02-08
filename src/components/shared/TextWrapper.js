import styled from "styled-components"
import { breakpoints } from "./Media"

export const Text = styled.div`
  font-size: 1rem;
  color: #2d2d2d;
  font-family: "Open Sans", sans-sherif;
  font-weight: normal;
  line-height: 1.3rem;
  padding: 0 6rem;
  @media (max-width: ${breakpoints.mobileMax}) {
      font-size: .8rem;
      padding: 0 3rem;
  }
`
export const TextWrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  max-width: 90%;
  @media (max-width: ${breakpoints.mobileMax}) {
      max-width: 100%;
      align-items: center;
      text-align: center;
  }
`
export const TitleComponent = styled.div`
  font-size: 1.78rem;
  font-family: "Raleway", sans-sherif;
  font-weight: 400;
  margin-left: 5rem;
`
export const StyledText = styled.h4`
  font-size: .9rem;
  margin-left: 5rem;
  opacity: .7;
`
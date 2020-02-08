import React from "react"
import styled from "styled-components"
import { breakpoints } from "../shared/Media"

const Wrapper = styled.div`
  width: 100%;
  padding: 3rem 0px;
  display: flex;
  justify-content: flex-start;
  align-items: left;
  @media (max-width: ${breakpoints.mobileMax}) {
    justify-content: center;
    align-items: center;
  }
`
const Row = styled.div`
  max-width: 100%;
  width: 100%;
  padding: 0 3rem;
  @media (max-width: ${breakpoints.mobileMax}) {
    padding: 0;
  }
`

const Container = ({ children }) => {
  return (
    <Wrapper>
      <Row>{children}</Row>
    </Wrapper>
  )
}
export default Container

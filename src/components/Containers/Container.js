import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  padding: 3rem 0px;
  display: flex;
  justify-content: flex-start;
  align-items: left;
`
const Row = styled.div`
  max-width: 100%;
  width: 100%;
  padding: 0 3rem;
`

const Container = ({ children }) => {
  return (
    <Wrapper>
      <Row>{children}</Row>
    </Wrapper>
  )
}
export default Container

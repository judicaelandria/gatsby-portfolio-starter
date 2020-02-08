import styled from 'styled-components'
import { breakpoints } from './Media'

export const SkillWrapper = styled.div`
    max-width: 100%;
    display: flex;
    justify-content: left;
    flex-direction: column;
    padding: 0 6rem;
    line-height: 1rem;
    @media (max-width: ${breakpoints.mobileMax}) {
        justify-content: center;
        align-items: center;
    }
`
export const Items = styled.ul`
  list-style: circle;
  display: grid;
  justify-content: space-around;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px 20px;
  @media (max-width: ${breakpoints.mobileMax}) {
      grid-template-columns: 1fr 1fr;
      grid-gap: 24px 50px;
      justify-content: center;
      aling-items: center;
  }
`
export const SkillItem = styled.li`
    font-size: 1rem;
    font-family: "Open Sans", sans-sherif;
`
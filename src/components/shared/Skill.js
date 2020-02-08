import styled from 'styled-components'

export const SkillWrapper = styled.div`
    max-width: 100%;
    display: flex;
    justify-content: left;
    align-items: left;
    flex-direction: column;
    padding: 0 6rem;
    line-height: 1rem;
`
export const Items = styled.ul`
  list-style: circle;
  display: grid;
  justify-content: space-around;
  align-items: left;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px 20px;
`
export const SkillItem = styled.li`
    font-size: 1.2rem;
    font-family: "Open Sans", sans-sherif;
`
import styled from 'styled-components'

export const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
`
export const GridThree = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 0 1rem;
    grid-template-columns: repeat(1, 1fr);
  }
`

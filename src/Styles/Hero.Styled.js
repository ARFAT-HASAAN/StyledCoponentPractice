import styled from 'styled-components'

export const HeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 0;
  > div {
    flex: 1;
  }

  h1 {
    font-size: 6.4rem;
    font-weight: 700;
    line-height: 7.7rem;

    span {
      font-size: 6.4rem;
      font-weight: 700;
      color: #5156d9;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    gap: 4rem;
    h1 {
      text-align: center;
      font-size: 4rem;
      padding: 0 2rem;
      line-height: 5rem;
      span {
        font-size: 4rem;
      }
    }
  }
`

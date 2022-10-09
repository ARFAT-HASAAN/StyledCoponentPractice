import styled from 'styled-components'

export const NavbarComponet = styled.nav`
  min-height: 12vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    list-style-type: none;
    display: flex;
    gap: 5rem;

    li {
      font-size: 1.8rem;
    }
  }

  img {
    width: 7rem;
    height: 7rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    padding: 1rem 0;
  }
`

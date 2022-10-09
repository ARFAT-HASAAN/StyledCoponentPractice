import styled from 'styled-components'

export const FeatureCard = styled.div`
  background-color: ${({ bg }) => bg};
  text-align: center;

  h3 {
    font-size: 3rem;
    padding: 1.5rem 0;
  }
  img {
    height: 200px;
  }
`

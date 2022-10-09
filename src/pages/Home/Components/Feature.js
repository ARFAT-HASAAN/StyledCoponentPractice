import React from 'react'
import { Container, GridThree } from '../../../Styles/Common.styled'
import Bootsrap from '../../../assets/images/bootstrap.png'
import Mui from '../../../assets/images/materialUI.png'
import Tailwind from '../../../assets/images/tailwind.png'
import { FeatureCard, FeatureContainer } from '../../../Styles/Feature.Styled'
import { FeatureContinar } from '../../../Styles/Home.Styled'
const Feature = () => {
  const data = [
    {
      Title: 'Bootstrap',
      img: Bootsrap,
      background: 'rgba(109, 67, 161, 0.3)',
    },
    {
      Title: 'Tailwind',
      img: Tailwind,
      background: 'rgba(66, 166, 178, 0.3)',
    },
    {
      Title: 'MaterialUI',
      img: Mui,
      background: 'rgba(61, 128, 247, 0.3)',
    },
  ]

  return (
    <FeatureContinar>
      <Container>
        <h1>Others well known styling fameworks</h1>
        <GridThree>
          {data.map((item) => (
            <FeatureCard bg={item.background}>
              <img src={item.img} alt="Bootsrap" />
              <h3>{item.Title}</h3>
            </FeatureCard>
          ))}
        </GridThree>
      </Container>
    </FeatureContinar>
  )
}

export default Feature

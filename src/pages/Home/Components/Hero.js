import React from 'react'
import banner from '../../../assets/images/right.png'
import { Container } from '../../../Styles/Common.styled'
import { HeroSection } from '../../../Styles/Hero.Styled'
const Hero = () => {
  return (
    <Container>
      <HeroSection>
        <div>
          <h1>
            Learn Styled Component from <span> Code ABC </span>{' '}
          </h1>
        </div>
        <div>
          <img src={banner} alt="hero img" />
        </div>
      </HeroSection>
    </Container>
  )
}

export default Hero

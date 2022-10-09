import React from 'react'
import { BannerContainer } from '../../../Styles/Home.Styled'
import Hero from './Hero'
import Navbar from './Navbar'

const Baner = () => {
  return (
    <BannerContainer>
      <Navbar />
      <Hero />
    </BannerContainer>
  )
}

export default Baner

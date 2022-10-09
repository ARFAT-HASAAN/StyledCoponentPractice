import React from 'react'
import { ThemeProvider } from 'styled-components'
import Baner from './Components/Baner'
import Feature from './Components/Feature'
import Footer from './Components/Footer'

/*
 Backroundcolor: background: linear-gradient(180deg, #FFFFFF 0.09%, #C9EFF1 100%);
 tailwindbg: background: rgba(66, 166, 178, 0.3)
 mUibg : background: rgba(61, 128, 247, 0.3);
 bootstrapbg: background: rgba(109, 67, 161, 0.3)

 */

const Theme = {
  mobile: '980px',
  smallDiv: '580px',
}

const Home = () => {
  return (
    <ThemeProvider theme={Theme}>
      <div>
        <Baner />
        <Feature />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default Home

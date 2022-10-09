import React from 'react'
import logo from '../../../assets/images/code abc.png'
import { Container } from '../../../Styles/Common.styled'
import { NavbarComponet } from '../../../Styles/Nabar.Styled'

const Navbar = () => {
  return (
    <Container>
      <NavbarComponet>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>About-us</li>
            <li>Teams</li>
          </ul>
        </div>
      </NavbarComponet>
    </Container>
  )
}

export default Navbar

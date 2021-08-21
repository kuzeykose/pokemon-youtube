import React from "react"
import logo from '../../statics/8303.png'

import {
  Container,
  MenuItems
} from './style'

const SideNav = () => {
  return (
    <Container>
      <MenuItems href={'/home'}>
        <img height={85} src={logo} />
      </MenuItems>
      <MenuItems href={'/home'}>Home</MenuItems>
    </Container>
  )
}

export default SideNav
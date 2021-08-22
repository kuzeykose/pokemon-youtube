import React from "react"
import logo from '../../statics/8303.png'

import {
  Container,
  MenuItems
} from './style'

const SideNav = () => {
  return (
    <Container>
      <MenuItems href={'/'}>
        <img height={85} src={logo} />
      </MenuItems>
      <MenuItems href={'/'}>Home</MenuItems>
    </Container>
  )
}

export default SideNav
import React from 'react'
import {Container, Image, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logoNav from '../assets/logoNav.png'


export const Nav = () => {
  return (
    <Navbar bg='light'>
        <Container>
          <Navbar.Brand >
            <Link to='/' className=''>
            <Image src={logoNav} height='50px'></Image>
            
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

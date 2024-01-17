import React from 'react'
import {Container, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaSun } from "react-icons/fa";

export const Nav = () => {
  return (
    <Navbar bg='secondary'>
        <Container>
          <Navbar.Brand >
            <Link to='/' className=''>

            <FaSun className='tex-light fs-1' />
            Weather App
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

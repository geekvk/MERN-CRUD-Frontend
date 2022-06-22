import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavbarBrand, Container } from 'reactstrap';
import AddIcon from '@mui/icons-material/Add';

function Header() {
  return (
    <Navbar color="dark" dark className='rounded'>
        <Container className='d-flex p-2 justify-content-between'>
            <NavbarBrand href='/'>Agenda List</NavbarBrand>
            <Nav>
                <NavItem>
                    <Link class="btn btn-primary" to='/add'>Add <AddIcon/></Link>
                </NavItem>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header
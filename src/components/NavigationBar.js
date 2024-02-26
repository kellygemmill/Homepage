import React from 'react'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'
import LanguageSelector from 'components/LanguageSelector'
import { Text } from 'containers/Language';

const NavigationBar = () => {

    return(
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Navbar.Brand href='https://kellygemmill.com'><Text textId='kellygemmill' /></Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className="mr-auto">
                    <Nav.Link href='https://kellygemmill.com'><Text textId='home' /></Nav.Link>
                    <NavDropdown title={Text({'textId': 'projects'})} id='basic-nav-dropdown'>
                        <NavDropdown.Item href='http://localhost:3000/#projects'><Text textId='summary' /></NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href='https://dictionary.kellygemmill.com'><Text textId='dictionary' /></NavDropdown.Item>
                        <NavDropdown.Item href='https://sudokusolver.kellygemmill.com'><Text textId='sudoku' /></NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href='http://localhost:3000/#contact-me'><Text textId='contact' /></Nav.Link>
                    <Nav.Link href='https://github.com/kellygemmill' target="_blank" rel="noopener noreferrer"><Text textId='github' /></Nav.Link>
                    <Nav.Link href='https://www.linkedin.com/in/kelly-gemmill/' target="_blank" rel="noopener noreferrer"><Text textId='linkedin' /></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            {/* <Nav>
                <LanguageSelector />
            </Nav> */}

        </Navbar>
    )
}

export default NavigationBar
import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
function BootstrapNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Social-Media Website</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to='/' className={(isActive) => isActive ? 'Active' : ""}>Home</Nav.Link>
                        <Nav.Link as={NavLink} to='/posts' className={(isActive) => isActive ? 'Active' : ""}>Posts</Nav.Link>
                        <Nav.Link as={NavLink} to='/about' className={(isActive) => isActive ? 'Active' : ""}>About Us</Nav.Link>
                        <Nav.Link as={NavLink} to='/contact' className={(isActive) => isActive ? 'Active' : ""}>Contact</Nav.Link>
                        <Nav.Link as={NavLink} to='/count' className={(isActive) => isActive ? 'Active' : ""}>Count</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Sign Up</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default BootstrapNavbar;
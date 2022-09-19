import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import "./Header.css";
import img from "../../../images/Logo.svg";

const Header = () => {
    return (
        <div className='sticky top-0 z-10'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Container >
                    <Navbar.Brand href="#home">
                        <img src={img} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >

                        <Nav className='ms-auto'>
                            <Nav.Link href="#deets">Order</Nav.Link>
                            <Nav.Link href="#memes">
                                Order Review
                            </Nav.Link>
                            <Nav.Link href="#memes">
                                Manage Inventory
                            </Nav.Link>
                            <Nav.Link href="#memes">
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
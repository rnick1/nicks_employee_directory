import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function MainNavbar () {
    return (
        <div>
            <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Navbar.Brand href="#home">Employee Directory</Navbar.Brand>
                    <Nav className="mr-auto"></Nav>
            </Navbar>
        </div>
    );
}

export default MainNavbar;
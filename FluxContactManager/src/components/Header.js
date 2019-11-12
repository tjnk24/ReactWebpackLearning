import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="light">
                <Navbar.Brand>
                    Contact Manager
                </Navbar.Brand>
            </Navbar>
            <br/>
        </div>
    );
};

export default Header;
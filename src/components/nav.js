import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import {
    BrowserRouter as Router ,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './nav.css'

export default function Navbar() {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);

    return (
        <Router>
            <div className="navT">
                <Navbar light expand="xs">
                    <Nav vertical>
                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle nav>
                                Photographies <i className="fa fa-caret-down"></i>
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Dark Dog Moto Tour 2012</DropdownItem>
                                    <DropdownItem divider />
                                <DropdownItem>Yamaha R1 2016</DropdownItem>
                                    <DropdownItem divider />
                                <DropdownItem>Triumph Daytona 2007</DropdownItem>
                                    <DropdownItem divider />
                                <DropdownItem>Portraits</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <NavItem>
                            <Link href="/blog">Blog</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/about">À propos</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/form">Contact</Link>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>  
        </Router>
    )
}
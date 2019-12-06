import React, { useState } from 'react';
import { Navbar, Nav, NavItem, NavLink, UncontrolledDropdown, Collapse, NavbarToggler, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './navtest.css'

export default function NavbarTest() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  
    return (
      <div className="navT">
        <Navbar light expand="md">
          <NavbarToggler onClick={toggleNavbar} className="mr" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav className="mr-auto"  >
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                Photographies <i className="fa fa-caret-down"/>
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
              </UncontrolledDropdown>
            <NavItem>
                <NavLink href="#">Blog</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#">À propos</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#">Contact</NavLink>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
      </div>
    );
  }
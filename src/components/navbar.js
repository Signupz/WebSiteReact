import React, { useState } from 'react';
import { Navbar as NavbarContainer, Nav, NavItem, NavLink, UncontrolledDropdown, Collapse, NavbarToggler, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './navbar.css';
import About from './about'
import Form from './form'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function Navbar() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  
    return (
      <Router>
        <div className="navT">
          <NavbarContainer light expand="md">
            <NavbarToggler onClick={toggleNavbar} className="mr" />
            <Collapse isOpen={!collapsed} navbar>
              <Nav className="mr-auto" id="navBar" >
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
                    <NavLink><Link to="/about">À propos</Link></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink><Link to="/form">Contact</Link></NavLink>
                </NavItem>
              </Nav>
              </Collapse>
          </NavbarContainer>


          <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
        </Switch>
        </div>
      </Router>
    );
  }
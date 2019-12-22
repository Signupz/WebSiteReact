import React, { useState } from 'react';
import { Navbar as NavbarContainer, Nav, NavItem, NavLink, UncontrolledDropdown, Collapse, NavbarToggler, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './navbar.css';
import Blog from './blog';
import About from './about';
import Contact from './contact';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


export default function Navbar() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  
    return (
      <Router>
        <div className="header">
          <Link to="/about"><h1 className="maintitle">Ludovic Mazet</h1>
              <h3 className="secondtitle">Dev Web Junior</h3></Link>
          </div>
        <div>
          <NavbarContainer light expand="md">
            <NavbarToggler onClick={toggleNavbar}/>
            <Collapse isOpen={!collapsed} navbar>
              <Nav className="mr-auto">
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
                    <NavLink><Link to="/blog">Blog</Link></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink><Link to="/about">À propos</Link></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink><Link to="/contact">Contact</Link></NavLink>
                </NavItem>
              </Nav>
              </Collapse>
          </NavbarContainer>

        <Switch>
          <Route path="/blog" component={Blog} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>

        </div>
      </Router>
    );
  }
import React, { useState } from 'react';
import { Navbar as NavbarContainer, Nav, NavItem, NavLink, UncontrolledDropdown, Collapse, NavbarToggler, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './navbar.css';
import DDMT from './DDMT'
import Daytona2007 from './daytona2007'
import Thruxton from './thruxton'
import R12016 from './R12016'
import Ledenon from './Ledenon'
import Urban from './urban'
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
          <Link to="/WebSiteReact"><h1 className="maintitle">Ludovic Mazet</h1>
              {/* <h3 className="secondtitle">Dev Web Junior</h3> */}
              </Link>
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
                      <DropdownItem><Link to="/daytona2007">Triumph Daytona 2007</Link></DropdownItem>
                          <DropdownItem divider />
                      <DropdownItem><Link to="/thruxton">Triumph Thruxton R</Link></DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem><Link to="/ledenon">Roulage Ledenon 4G</Link></DropdownItem>
                          <DropdownItem divider />
                      <DropdownItem><Link to="/DDMT">Dark Dog Moto Tour 2012</Link></DropdownItem>
                          <DropdownItem divider />
                      <DropdownItem><Link to="/R12016">Yamaha R1 2016</Link></DropdownItem>
                          <DropdownItem divider />
                      <DropdownItem><Link to="/urban">Paysages urbains</Link></DropdownItem>
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
          <Route path="/WebSiteReact" component={Blog} />
          <Route path="/daytona2007" component={Daytona2007} />
          <Route path="/thruxton" component={Thruxton} />
          <Route path="/urban" component={Urban} />
          <Route path="/ledenon" component={Ledenon} />
          <Route path="/R12016" component={R12016} />
          <Route path="/DDMT" component={DDMT} />
          <Route path="/blog" component={Blog} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>

        </div>
      </Router>
    );
  }
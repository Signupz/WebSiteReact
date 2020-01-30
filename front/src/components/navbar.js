import React, { Component,  useState } from 'react';
import { Navbar as NavbarContainer, Nav, NavItem, NavLink, UncontrolledDropdown, Collapse, NavbarToggler, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './navbar.css';
import DDMT from './ddmt'
import Daytona2007 from './daytona2007'
import Thruxton from './thruxton'
import R12016 from './R12016'
import Ledenon from './ledenon'
import Urban from './urban'
import Blog from './blog';
import About from './about';
import Contact from './contact';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Slider } from "react-burgers";

export default class Navbar extends Component {
  constructor() {
    super();
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.closeNavbar = this.closeNavbar.bind(this);
    this.state = {
      collapsed : true
    }
  }

  componentDidMount() {
    window.addEventListener("keydown", e => {
    if (e.key === "Escape" || e.key === "Esc") {
        return this.this.closeNavbar();
    }
    });
  }

  toggleNavbar() {
    this.setState({
    collapsed: !this.state.collapsed
    });
  }

  closeNavbar() {
    if (this.state.collapsed == false ) {
    this.this.toggleNavbar();
    }
    
  }

    render() {
    return (
      <Router>
        <div className="header">
          <Link exact to="/" basename="/">
              <h1 className="maintitle">Ludovic Mazet</h1>
              <h3 className="secondtitle">Dev Web Junior</h3>
          </Link>
          <NavbarToggler style={{backgroundColor: "rgba(0, 0, 0, 0)"}}>
              <Slider color={'#fff'} onClick={this.toggleNavbar}/>
          </NavbarToggler>
        </div>
        <div>
          <NavbarContainer light expand="md">
            
            <Collapse className="DropDownMenu" isOpen={!this.state.collapsed} navbar>
              <Nav className="mr-auto">
              <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav>
                  Photographies <i className="fa fa-caret-down"/>
                  </DropdownToggle>
                  <DropdownMenu>
                      <DropdownItem onClick={this.toggleNavbar}><Link to="/daytona2007">Triumph Daytona 2007</Link></DropdownItem>
                          <DropdownItem divider />
                      <DropdownItem onClick={this.toggleNavbar}><Link to="/thruxton">Triumph Thruxton R</Link></DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem onClick={this.toggleNavbar}><Link to="/ledenon">Roulage Ledenon 4G</Link></DropdownItem>
                          <DropdownItem divider />
                      <DropdownItem onClick={this.toggleNavbar}><Link to="/DDMT">Dark Dog Moto Tour 2012</Link></DropdownItem>
                          <DropdownItem divider />
                      <DropdownItem onClick={this.toggleNavbar}><Link to="/R12016">Yamaha R1 2016</Link></DropdownItem>
                          <DropdownItem divider />
                      <DropdownItem onClick={this.toggleNavbar}><Link to="/urban">Paysages urbains</Link></DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

                <NavItem>
                    <NavLink onClick={this.toggleNavbar}><Link to="/blog">Blog</Link></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={this.toggleNavbar}><Link to="/about">À propos</Link></NavLink>
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
}
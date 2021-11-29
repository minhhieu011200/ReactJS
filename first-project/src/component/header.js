import React, { Component, useState } from 'react';

import {
    Link
} from "react-router-dom";
  
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import {CartContext} from '../context/Cart'


class Header extends Component {
  static contextType= CartContext;

  render(){
    const {sumCount}=this.context
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="mr-auto text-muted" navbar>
              <NavItem>
                  <NavLink href="/" className="text-muted">Home</NavLink>
              </NavItem>

              <NavItem>
                    <NavLink href="/carts" className="text-muted">Cart ({sumCount})</NavLink>               
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Manager
                </DropdownToggle>
                <DropdownMenu left>
                  <DropdownItem>
                      <Link to="/" className="text-muted">Users</Link>
                  </DropdownItem>
                  <DropdownItem>
                      <Link to="/" className="text-muted">Product</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
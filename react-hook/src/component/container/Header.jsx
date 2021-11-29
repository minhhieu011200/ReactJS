import React, { useState, useContext } from 'react';

import { CartContext } from "../../context/CartContext";

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



const Header = () => {
    const { sumCount } = useContext(CartContext);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="sticky-top sticky-offset">
            <Navbar color="light" light expand="md" >
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
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
                            <DropdownMenu>
                                <DropdownItem>
                                    <NavLink href="/" className="text-muted">Users</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href="/" className="text-muted">Product</NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText>Simple Text</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Header;
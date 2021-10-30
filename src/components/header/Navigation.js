import React, {Fragment} from 'react';
import {
    Collapse,
    DropdownItem,
    DropdownMenu, DropdownToggle,
    Nav, Navbar,
    NavbarBrand,
    NavbarText,
    NavbarToggler,
    NavItem,
    NavLink, UncontrolledDropdown
} from "reactstrap";

const Navigation = () => {
    return (
        <Fragment>

            <Navbar color="dark" expand="md" dark >
                <div className="ml-5">
                    <NavbarBrand href="/">
                        Resturent
                    </NavbarBrand>
                </div>
            </Navbar>


            
        </Fragment>
    );
};

export default Navigation;
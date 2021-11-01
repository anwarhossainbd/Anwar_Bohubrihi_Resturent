import React, {Component, Fragment} from 'react';
import {
    Collapse,
    DropdownItem,
    DropdownMenu, DropdownToggle,
    Nav, Navbar,
    NavbarBrand,
    NavbarText,
    NavbarToggler,
    NavItem,
     UncontrolledDropdown
} from "reactstrap";
import {Link, NavLink} from "react-router-dom";

class Navigation extends Component {

    constructor() {
        super();
        this.state={
            isNavOpen:false
        }
    }

    navToggle =()=>{
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {

        return (
            <Fragment>

                <Navbar color="dark" expand="md" dark>
                    <NavbarBrand href="/" className="mr-5 ml-5">
                        Resturent
                    </NavbarBrand>
                    <NavbarToggler onClick={ this.navToggle}  />
                    <Collapse navbar isOpen={this.state.isNavOpen}>
                        <Nav className="me-auto" navbar>
                            <NavItem>
                                <Link to="/" className="nav-link active">Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/menu" className="nav-link">Menu</Link>
                            </NavItem>

                            <NavItem>
                                <Link to="/about" className="nav-link">About</Link>
                            </NavItem>

                            <NavItem>
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </NavItem>

                        </Nav>

                    </Collapse>
                </Navbar>


            </Fragment>
        );
    };

};

export default Navigation;
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";
import { Button } from "react-bootstrap";
import CustomerContext from "../context/Context";
import AccountNavi from "./AccountNavi";

const Navi = () => {

    const { isUserAuth } = useContext(CustomerContext);

    let isOpen = false
    const toggle = () => {
        isOpen = !isOpen
    };

    return (
        <div>

            <Navbar color="dark" expand="lg" dark>
                <NavbarBrand tag={Link} to="/">
                    Home
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    {isUserAuth ?
                        (
                            <Nav className="ms-auto" navbar>
                                <NavItem>
                                    <NavLink>
                                        <AccountNavi />
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        ) : (
                            <Nav className="ms-auto" navbar>
                                <NavItem>
                                    <NavLink tag={Link} to="/list">
                                        <Button
                                            variant='outline-secondary'
                                            className="btn"
                                            data-toggle="modal"
                                        >
                                            <i className="material-icons">&#xE147;</i>
                                            <span>User List</span>
                                        </Button>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/login">
                                        <Button
                                            variant='outline-secondary'
                                            className="btn"
                                            data-toggle="modal"
                                        >
                                            <i className="material-icons">&#xE147;</i>
                                            <span>Login</span>
                                        </Button>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/register">
                                        <Button
                                            variant='outline-secondary'
                                            className="btn"
                                            data-toggle="modal"
                                        >
                                            <i className="material-icons">&#xE147;</i>
                                            <span>Sign In</span>
                                        </Button>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        )}

                </Collapse>
            </Navbar>
        </div>
    );

}

export default Navi;
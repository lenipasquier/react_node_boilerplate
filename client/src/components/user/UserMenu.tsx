import Nav from "react-bootstrap/Nav";
import React from "react";
import {NavLink} from "react-router-dom";

export function UserMenu() {

    return (
        <>
            <Nav className="me-auto">
            <li className="nav-item">
                <NavLink to="logout" className="nav-link">
                    <span className="d-lg-none">Menu Link</span>
                </NavLink>
            </li>
                
            </Nav>
            <Nav>
                <li className="nav-item">
                    <NavLink to="logout" className="nav-link">
                        <span className="d-lg-none">Logout</span>
                    </NavLink>
                </li>
            </Nav>
        </>
    )
}
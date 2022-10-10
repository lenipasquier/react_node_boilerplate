import {Outlet} from "react-router-dom";
import {UserMenu} from "./UserMenu";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import React from "react";

export function UserPageLayout() {

    return (
        <>
            <header>
                <Navbar bg="dark" variant="dark" expand="md" fixed="top">
                    <Container fluid>
                        <Navbar.Brand href="/">REACT <span className="text-danger">DEMO</span></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <UserMenu />
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <main className="flex-shrink-0 mt-5">
                <div className="container-fluid mt-2">
                    <Outlet />
                </div>
            </main>
            <footer className="footer mt-auto py-3 bg-light">
                <div className="container-fluid">
                    <span className="text-muted">©2022 Project Name.</span>
                </div>
            </footer>
        </>

    )
}
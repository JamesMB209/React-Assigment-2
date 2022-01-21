import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Routes, BrowserRouter, Link, Route, Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { logoutNowThunk } from '../redux/auth/actions';
import { CLEAR_TODO_ACTION } from "../redux/todolist/action";

import { Button } from "react-bootstrap";


export default function Header() {
    let dispatch = useDispatch();
    const authenticated = useSelector((state) => state.authStore.auth);

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">ToDo-App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/todo">ToDo List</Nav.Link>
                        {authenticated
                        ?<Nav.Link href="/login" onClick={() => {
                            dispatch({ type: CLEAR_TODO_ACTION });
                            dispatch(logoutNowThunk());
                          }} >Logout</Nav.Link>
                        :<Nav.Link href="/login">Login</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
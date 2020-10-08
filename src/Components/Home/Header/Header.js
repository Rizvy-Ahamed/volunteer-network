import React from 'react';
import { Button, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../logos/Group 1329.png';


const Header = () => {
    return (
       
        <div>
       <Navbar bg="transparent" variant="light" className="p-3 pr-5 pl-5">
                <img
                    src={logo}
                    width="170"
                    height="50"
                    className="d-inline-block align-top"
                    alt="volunteer logo"
                />
                <Nav className="ml-auto justify-content-within pr-5">
                    <Nav.Link to="/home" className="text-dark pr-5"><strong>Home</strong></Nav.Link>
                    <Nav.Link to="/donation" className="text-dark  pr-5"><strong>Donation</strong></Nav.Link>
                    <Nav.Link to="/event" className="text-dark pr-5"><strong>Event</strong></Nav.Link>
                    <Nav.Link to="/blogs" className="text-dark pr-5"><strong>Blogs</strong></Nav.Link>
                </Nav>
               
                <Form inline>
                
                <Button variant="primary" className="mr-4 pr-5 pl-5">Regular</Button>
                    <Link to="/admin" style={{textDecoration: 'none'}}><Button variant="dark" className="pr-5 pl-5" to="/admin">Admin</Button></Link>
                </Form>
            </Navbar>
           <div className="text-center container m-auto pt-5">
           <h3><strong>I GROW BY HELPING PEOPLE IN NEED.</strong></h3>
           <div className="d-flex p-3 justify-content-center">
           <input type="text" className="form-control" />
            <Button variant="danger" className="pr-5 pl-5">Search</Button>
           </div>
           </div>

        </div>
    );
};
export default Header;
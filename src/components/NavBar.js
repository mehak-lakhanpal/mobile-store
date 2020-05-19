import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar,Button,Form ,Nav,DropdownButton,Dropdown} from 'react-bootstrap';
const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand >Mobile Store</Navbar.Brand>
            <Nav className="mr-auto">
               <Link to="/">Products</Link>
                <Link className='ml-5' to="/cart">My cart</Link>
            </Nav>
            <Form inline>
                <DropdownButton  id="dropdown-item-button" title="Mehak">
                <Dropdown.Item as="button">LogOut</Dropdown.Item>
                </DropdownButton>
                <Button className='ml-5' variant="outline-info">Login</Button>
            </Form>
        </Navbar>
        
    )
}
export default NavBar;
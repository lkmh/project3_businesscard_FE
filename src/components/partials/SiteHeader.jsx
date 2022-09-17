import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function SiteHeader() {
    const token = localStorage.getItem('user_token')

    return (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand><Link to="/">Tap Card</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                {
                    token ? (
                        <>
                        <Nav.Link><Link to="/profile">Profile</Link></Nav.Link>
                        <Nav.Link><Link to="/editprofile">Edit</Link></Nav.Link>
                        <Nav.Link><Link to="/uploadphoto">Upload Photo</Link></Nav.Link>
                        <Nav.Link><Link to="/profile/edit">External View</Link></Nav.Link>
                        </>
                    ) :
                    <>
                    <Nav.Link><Link to="/register">Register</Link></Nav.Link>
                    <Nav.Link><Link to="/user/login">Login</Link></Nav.Link>
                    </>
                }
                
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default SiteHeader
import  Navbar  from "react-bootstrap/Navbar";
import  Nav  from "react-bootstrap/Nav";
import  Button  from "react-bootstrap/Button";
import  Image  from "react-bootstrap/Image";

export default function TopBar() {
    return(
  <div>
    <Navbar bg="light" expand="lg" >
    <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
        <img src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg" /> 
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto"> 
        </Nav>
        <Nav>
            <Nav.Link href="#LogIn"><strong>Log In</strong></Nav.Link>
            <Button style={{ backgroundColor: "#0AAC0B", borderColor: "#0AAC0B", borderRadius: "30px", fontWeight: "bold"}} >Sign Up</Button>{' '}
        </Nav>
    </Navbar.Collapse>
</Navbar>

  </div>
    )
}

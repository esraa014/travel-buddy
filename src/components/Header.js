import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function BasicExample() {
  return (
    <Navbar expand="lg" className="navbar nav-bar-expand-lg  sticky-top">
      <Container>
        <Navbar.Brand className="nav-brand text-uppercase" href="#home">
          Bella &nbsp; Italia{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" nav ms-auto mb-2 mb-lg-0">
            <Nav.Link className="p-2 p-lg-3 " href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="p-2 p-lg-3" href="#why">
              Why Italy?
            </Nav.Link>

            <Nav.Link className="p-2 p-lg-3" href="#des">
              destination
            </Nav.Link>
            <Nav.Link className="p-2 p-lg-3" href="#abou">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

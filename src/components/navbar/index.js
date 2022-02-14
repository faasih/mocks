import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Assets from "../../constants/images";
import "./styles.css";
export default function AppNavbar(props) {
  const menu = [
    { name: "about us" },
    { name: "products" },
    { name: "media" },
    { name: "investors" },
    { name: "information" },
    { name: "downloads" },
    { name: "eservices" },
  ];

  console.log("props at navbar are", props);

  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={Assets.appLogoWithoutBg} height={120} width={120} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse style={{ marginLeft: "18%" }} id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {menu.map((item, index) => {
              return (
                <NavDropdown
                  key={index}
                  title={item.name}
                  className="px-4"
                  id="navbarScrollingDropdown"
                  style={{ textTransform: "capitalize" }}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              );
            })}

            <Nav.Link className="px-5" href="#">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex flex-end flex-row">
          <i className="fas fa-search px-4"></i>
          <span className="language px-4">Language</span>
        </div>
      </Container>
    </Navbar>
  );
}

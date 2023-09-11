import { Navbar, Nav, Container } from "react-bootstrap";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";

const AdminHeader = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand>MERN APP ADMIN</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/admin/logout">
                <Nav.Link>
                  <FaUser /> users
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/admin/logout">
                <Nav.Link>
                  <FaSignOutAlt /> Logout
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default AdminHeader;

import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { Nav, Navbar, Container, Button, Image } from "react-bootstrap";
import { FiLogOut } from "react-icons/fi";

function NavBar(props) {
  const handleLogout = (e) => {
    e.preventDefault();
    props.setAuthedUser(null);
  };
  const { users, authedUser } = props;
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav
          className="justify-content-center"
          defaultActiveKey="/home"
          as="ul"
        >
          <Nav.Item as="li">
            <Nav.Link as={NavLink} to="/" exact>
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link as={NavLink} to="/add">
              New poll
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link as={NavLink} to="/leaderboard">
              Leader Board
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as:{" "}
            <Image
              width="50px"
              roundedCircle
              src={users[authedUser].avatarURL}
              alt="user avatar"
            ></Image>{" "}
            {users[authedUser].name}
            <Button
              className="ms-3"
              size="sm"
              variant="danger"
              onClick={handleLogout}
            >
              Log out.. <FiLogOut />
            </Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function mapStateToProps({ users, authedUser }) {
  return { users, authedUser };
}

export default connect(mapStateToProps, { setAuthedUser })(NavBar);

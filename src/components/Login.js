import React, { Component } from "react";
import LoginForm from "./LoginForm";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import img from "../images/react-redux.png";
class Login extends Component {
  state = {
    loading: false,
  };

  handleLoading = () => {
    this.setState({ loading: true });
  };

  render() {
    return (
      <Container>
        <Row className="justify-content-center mt-5">
          <Col lg={7}>
            <Card
              style={{ backgroundColor: "#60dafb" }}
              className="text-center"
            >
              <Col>
                <Card.Header as="h4">
                  Welcome To Would You Rather Game
                </Card.Header>
                <Image
                  className="m-2"
                  width="300px"
                  src={img}
                  alt="react-redux photo"
                ></Image>
              </Col>

              <Card.Body>
                <Col>
                  <Card.Text as="h6"> please login to continue</Card.Text>
                  <LoginForm onLoading={this.handleLoading} />
                </Col>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;

import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading";
import Login from "./Login";
import Nav from "./Nav";
import Home from "./Home";
import UserCard from "./UserCard";
import AddPoll from "./AddPoll";
import Leaderboard from "./LeaderBoard";
import ErrorPage from "./ErrorPage";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }
  render() {
    const { authedUser } = this.props;
    return (
      <Router>
        <LoadingBar />

        <div className="app">
          {authedUser === null ? (
            <Route component={Login}></Route>
          ) : (
            <>
              <Nav />
              <Container>
                <Row className="justify-content-center">
                  <Col lg={7}>
                    <Switch>
                      <Route path="/" exact component={Home} />
                      <Route path="/questions/:id" component={UserCard} />
                      <Route path="/add" component={AddPoll} />
                      <Route path="/leaderboard" component={Leaderboard} />
                      <Route path="/badPath" component={ErrorPage} />
                      <Route component={ErrorPage} />
                    </Switch>
                  </Col>
                </Row>
              </Container>
            </>
          )}
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}
export default connect(mapStateToProps)(App);

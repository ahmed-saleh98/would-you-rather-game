import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { handleSaveQuestion } from "../actions/questions";
import { Card, Form, FloatingLabel, Button } from "react-bootstrap";

class AddPoll extends Component {
  state = {
    toHome: false,
    option1: "",
    option2: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { authedUser, dispatch } = this.props;
    const { option1, option2 } = this.state;

    dispatch(handleSaveQuestion(option1, option2, authedUser));
    this.setState({
      option1: "",
      option2: "",
      toHome: true,
    });
  };
  render() {
    const { toHome, option1, option2 } = this.state;
    const disabled = option1 === "" || option2 === "";
    if (toHome === true) {
      return <Redirect push to="/" />;
    }
    return (
      <Card bg="" text="" className=" mt-2">
        <Card.Header className="text-center" as="h3">
          Craete New Poll
        </Card.Header>
        <Card.Body>
          <Form onSubmit={this.handleSubmit}>
            <h5>would you rather :</h5>
            <FloatingLabel label="Option One " className="mb-3">
              <Form.Control
                required
                id="option1"
                type="text"
                placeholder="Option One "
                value={option1}
                onChange={this.handleChange}
              />
            </FloatingLabel>

            <FloatingLabel label="Option Two " className="mb-3">
              <Form.Control
                required
                id="option2"
                type="text"
                placeholder="Option Two "
                value={option2}
                onChange={this.handleChange}
              />
            </FloatingLabel>
            <div className="d-grid gap-2">
              <Button disabled={disabled} type="submit">
                Add Poll
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(AddPoll);

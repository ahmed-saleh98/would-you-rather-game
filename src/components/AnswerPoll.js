import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSaveQuestionAnswer } from "../actions/users";
import { Card, Button, Form } from "react-bootstrap";
class AnswerPoll extends Component {
  state = {
    value: "",
  };
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { value } = this.state;
    if (value !== "") {
      const { authedUser, question, dispatch } = this.props;
      dispatch(handleSaveQuestionAnswer(authedUser, question.id, value));
    }
  };
  render() {
    const { question } = this.props;
    const { value } = this.state;

    return (
      <Card.Body>
        <Card.Title>Would You rather:</Card.Title>
        <>
          <Form onSubmit={this.handleSubmit}>
            <div key="default-radio">
              <Form.Check
                type="radio"
                label={question.optionOne.text}
                value="optionOne"
                checked={this.state.value === "optionOne"}
                onChange={this.handleChange}
              />
              <Form.Check
                type="radio"
                label={question.optionTwo.text}
                value="optionTwo"
                checked={this.state.value === "optionTwo"}
                onChange={this.handleChange}
              />
            </div>
            <div className="d-grid gap-2">
              <Button
                type="submit"
                disabled={value === ""}
                size="lg"
                variant="success"
              >
                Submit
              </Button>
            </div>
          </Form>
        </>
      </Card.Body>
    );
  }
}

function mapStateToProps({ authedUser }, { match }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(AnswerPoll);

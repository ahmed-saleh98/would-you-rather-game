import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { Form, Button } from "react-bootstrap";
class LoginForm extends Component {
  state = {
    value: "",
  };
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { onLoading } = this.props;
    const authedUser = this.state.value;

    new Promise((res) => {
      onLoading();
      setTimeout(() => res(), 500);
    }).then(() => this.props.setAuthedUser(authedUser));
  };

  render() {
    const { users } = this.props;
    const { value } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Select
          placeholder="Select user"
          name="loginForm"
          id="loginForm"
          list="users"
          value={value}
          onChange={this.handleChange}
        >
          <option value="">Select user</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </Form.Select>
        <div className="d-grid gap-2">
          <Button
            style={{ backgroundColor: "#785bbd" }}
            disabled={value === ""}
            type="submit"
          >
            Submit
          </Button>
        </div>
      </Form>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.values(users),
  };
}

export default connect(mapStateToProps, { setAuthedUser })(LoginForm);

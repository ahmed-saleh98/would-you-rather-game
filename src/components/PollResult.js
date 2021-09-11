import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Card, ProgressBar, Row, Col, Button } from "react-bootstrap";
import { GiCheckMark } from "react-icons/gi";

function PollResult(props) {
  const handleClick = () => {
    props.history.push("/");
  };

  const { question, user } = props;

  const optionOneVotes = question.optionOne.votes.length;
  const optionTwoVotes = question.optionTwo.votes.length;
  const votesTotal = optionOneVotes + optionTwoVotes;
  const userVote = user.answers[question.id];

  const opt1Variant = optionOneVotes > optionTwoVotes ? "success" : "dark";
  const opt2Variant = optionOneVotes < optionTwoVotes ? "success" : "dark";

  const opt1Color = optionOneVotes > optionTwoVotes ? "green" : "#9e9e9e";
  const opt2Color = optionOneVotes < optionTwoVotes ? "green" : "#9e9e9e";
  return (
    <Card.Body>
      <Card.Title>Would You rather:</Card.Title>
      <>
        <Row style={{ boxShadow: `0px 0px 2px 1px ${opt1Color}` }}>
          <Col>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {question.optionOne.text}
              {userVote === "optionOne" && (
                <GiCheckMark
                  style={{
                    color: " green",
                    fontSize: "25px",
                  }}
                />
              )}
            </div>
            <br />
            <ProgressBar
              style={{ margin: "5px", height: "25px" }}
              variant={opt1Variant}
              now={(optionOneVotes / votesTotal) * 100}
              label={`${((optionOneVotes / votesTotal) * 100).toFixed(2)} %`}
            />
            {optionOneVotes} out of {votesTotal} votes
          </Col>
        </Row>
        <br />
        <Row style={{ boxShadow: `0px 0px 2px 1px ${opt2Color}` }}>
          <Col>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {question.optionTwo.text}
              {userVote === "optionTwo" && (
                <GiCheckMark
                  style={{
                    color: " green",
                    fontSize: "25px",
                  }}
                />
              )}
            </div>
            <br />
            <ProgressBar
              style={{ margin: "5px", height: "25px" }}
              variant={opt2Variant}
              now={(optionTwoVotes / votesTotal) * 100}
              label={`${((optionTwoVotes / votesTotal) * 100).toFixed(2)} %`}
            />
            {optionTwoVotes} out of {votesTotal} votes
          </Col>
        </Row>
        <br />
        <Button size="lg" onClick={handleClick}>
          Back
        </Button>
      </>
    </Card.Body>
  );
}

function mapStateToProps({ users, authedUser }) {
  const user = users[authedUser];
  return {
    user,
  };
}

export default withRouter(connect(mapStateToProps)(PollResult));

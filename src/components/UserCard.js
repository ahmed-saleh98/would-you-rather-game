import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import QuesCard from "./QuesCard";

function UserCard(props) {
  const { id, question, answered, badPath } = props;
  return badPath === true ? (
    <Redirect to="/badPath" />
  ) : (
    <QuesCard
      id={id}
      question={question}
      userId={question.author}
      answered={answered}
    />
  );
}

function mapStateToProps({ questions, authedUser }, props) {
  const { id } = props.match.params;
  const question = questions[id];

  let answered,
    badPath = false;
  if (question === undefined) {
    badPath = true;
  } else {
    answered =
      question.optionOne.votes.includes(authedUser) ||
      question.optionTwo.votes.includes(authedUser);
  }

  return {
    id,
    question,
    answered,
    badPath,
  };
}
export default connect(mapStateToProps)(UserCard);

import React from "react";
import { connect } from "react-redux";
import { Tabs, Tab } from "react-bootstrap";
import QuesCard from "./QuesCard";

function Home(props) {
  const { userQuestionData } = props;
  return (
    <Tabs defaultActiveKey="Unanswerd" className="mb-3 justify-content-center">
      <Tab eventKey="Unanswerd" title="Unanswerd qustions">
        {userQuestionData.unanswered.map((question) => (
          <QuesCard
            key={question.id}
            userId={question.author}
            question={question}
            answered={false}
          ></QuesCard>
        ))}
      </Tab>
      <Tab eventKey="answerd" title="answerd qustions">
        {userQuestionData.answered.map((question) => (
          <QuesCard
            key={question.id}
            userId={question.author}
            question={question}
            answered={true}
          ></QuesCard>
        ))}
      </Tab>
    </Tabs>
  );
}

function mapStateToProps({ authedUser, users, questions }) {
  const answeredIds = Object.keys(users[authedUser].answers);
  const answered = Object.values(questions)
    .filter((question) => answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  const unanswered = Object.values(questions)
    .filter((question) => !answeredIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    userQuestionData: {
      answered,
      unanswered,
    },
  };
}

export default connect(mapStateToProps)(Home);

import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Card, Image, Row, Col } from "react-bootstrap";
import AnswerPoll from "./AnswerPoll";
import PollResult from "./PollResult";
import PollInfo from "./PollInfo";

function QuesCard(props) {
  const handleClick = (e, id) => {
    e.preventDefault();
    props.history.push(`/questions/${id}`);
  };

  const { user, question, answered, location } = props;
  return (
    <Card className="mt-3">
      <Card.Header
        className="text-center"
        as="h5"
      >{`${user.name} asks:`}</Card.Header>
      <Row style={{ alignItems: "center" }}>
        <Col className="border-end" xs={4}>
          <Image
            style={{ margin: "20px" }}
            width="150"
            src={user.avatarURL}
            roundedCircle
          ></Image>
        </Col>

        <Col>
          {location.pathname === `/questions/${question.id}` ? (
            <>
              {answered === true ? (
                <PollResult question={question} />
              ) : (
                <AnswerPoll question={question} />
              )}
            </>
          ) : (
            <PollInfo
              answered={answered}
              question={question}
              handleClick={handleClick}
            />
          )}
        </Col>
      </Row>
    </Card>
  );
}

function mapStateToProps({ users }, { userId }) {
  const user = users[userId];
  return {
    user,
  };
}

export default withRouter(connect(mapStateToProps)(QuesCard));

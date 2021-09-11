import React from "react";
import { connect } from "react-redux";
import { Card, Row, Col, Image, Badge } from "react-bootstrap";
import { FaTrophy } from "react-icons/fa";

const trophyColors = ["gold", "silver", "orange"];
function Leaderboard(props) {
  const { usersData } = props;

  return usersData.map((user, idx) => (
    <Card key={user.id} bg="dark" text="white" className="mt-2 text-center">
      <Row>
        <Col xs={3} className="border-end border-success">
          <span
            style={{
              width: "35px",
              height: "30px",
              background: "#009688",
              position: "absolute",
            }}
          >
            <FaTrophy style={{ color: trophyColors[idx] }} />
          </span>
          <Image
            className="m-4"
            width="100"
            src={user.avatarURL}
            roundedCircle
          ></Image>
        </Col>
        <Col xs={6}>
          <h4 className="m-2">{user.name}</h4>
          <Row>
            <Col xs={10}>Number Of Answered Questions </Col>
            <Col xs={2}>{user.answerCount}</Col>
          </Row>
          <hr />
          <Row className="mb-2">
            <Col xs={10}>Number Of Questions Asked</Col>
            <Col xs={2}>{user.questionCount}</Col>
          </Row>
        </Col>
        <Col xs={3}>
          <Card bg="dark" text="white" style={{ height: "100%" }}>
            <Card.Header>Score</Card.Header>
            <Card.Body>
              <Badge
                bg="success"
                style={{ fontSize: "18px", width: "3rem", height: "3rem" }}
                className="rounded-circle p-3"
              >
                {user.total}
              </Badge>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Card>
  ));
}

function mapStateToProps({ users }) {
  const usersData = Object.values(users)
    .map((user) => ({
      id: user.id,
      name: user.name,
      avatarURL: user.avatarURL,
      answerCount: Object.values(user.answers).length,
      questionCount: user.questions.length,
      total: Object.values(user.answers).length + user.questions.length,
    }))
    .sort((a, b) => a.total - b.total)
    .reverse()
    .slice(0, 3);
  return {
    usersData,
  };
}

export default connect(mapStateToProps)(Leaderboard);

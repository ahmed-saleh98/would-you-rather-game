import React from "react";
import { Card, Button } from "react-bootstrap";

function PollInfo(props) {
  const handleClick = (e, id) => {
    e.preventDefault();
    const { handleClick } = props;
    handleClick(e, id);
  };

  const { question, answered } = props;
  return (
    <Card.Body>
      <Card.Title>Would You rather:</Card.Title>
      <Card.Text>
        {question.optionOne.text} <br /> or ...
      </Card.Text>
      <div className="d-grid gap-2">
        <Button
          size="lg"
          onClick={(e) => handleClick(e, question.id)}
          variant="success"
        >
          {answered === true ? "Show Results" : "Answer Poll"}
        </Button>
      </div>
    </Card.Body>
  );
}

export default PollInfo;

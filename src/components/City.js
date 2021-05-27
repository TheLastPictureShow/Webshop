import React from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { expense_berlin } from "../actions";

const City = () => {
  const dispatch = useDispatch();

  return (
    <div className="city">
      <div className="buttons">
        <Button
          variant="outline-primary"
          onClick={() => dispatch(expense_berlin())}
        >
          Berlin
        </Button>{" "}
        <Button variant="outline-primary">London</Button>{" "}
        <Button variant="outline-primary">New York City</Button>
        <Button variant="outline-primary">Rotterdam</Button>
        <Button variant="outline-primary">Lelystad</Button>
      </div>
    </div>
  );
};

export default City;

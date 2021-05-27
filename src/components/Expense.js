import React from "react";
import RadioGroup from "./RadioGroup";
import { useSelector } from "react-redux";

const Expense = () => {
  const spice = useSelector((state) => state.spices);

  return (
    <div className="expense">
      <h2>{spice}</h2>
      <RadioGroup />
    </div>
  );
};

export default Expense;

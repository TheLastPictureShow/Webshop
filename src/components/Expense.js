import React from "react";
import RadioGroup from "./RadioGroup";
import { useSelector } from "react-redux";

const Expense = () => {
  const spice = useSelector((state) => state.spices);
  console.log("spice price is", spice.price);
  console.log("spice is", spice);

  return (
    <div className="expense">
      {spice.price === undefined ? null : (
        <h5>{`You have selected ${spice.product} which costs ${spice.price}€`}</h5>
      )}
      <RadioGroup />
    </div>
  );
};

export default Expense;

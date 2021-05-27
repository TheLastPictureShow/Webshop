import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions";

const View = () => {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="view">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>Plus</button>
      <button onClick={() => dispatch(decrement())}>Minus</button>

      {isLogged ? <h2>Hello!</h2> : "Oh my"}
    </div>
  );
};

export default View;

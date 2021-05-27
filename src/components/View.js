import React from "react";
import { useSelector, useDispatch } from "react-redux";

const View = () => {
  const isLogged = useSelector((state) => state.isLogged);

  return <div className="view">{isLogged ? <h2>Hello!</h2> : "Oh my"}</div>;
};

export default View;

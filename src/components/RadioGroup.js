import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saffron, parsley, thyme } from "../actions";
import { Link } from "react-router-dom";

const RadioGroup = () => {
  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch();

  const onRadioChange = (e) => {
    setSelected(e.target.value);
  };

  console.log("selected is:", selected);

  return (
    <div className="main">
      <form className="form-group">
        <div className="radio">
          <input
            type="radio"
            name="brand"
            value="saffron"
            checked={selected === "saffron"}
            onChange={onRadioChange}
            onClick={() => dispatch(saffron())}
          />
          <label htmlFor="saffron">Saffron</label>
        </div>

        <div className="radio">
          <input
            type="radio"
            name="brand"
            value="parsley"
            checked={selected === "parsley"}
            onChange={onRadioChange}
            onClick={() => dispatch(parsley())}
          />
          <label htmlFor="parsley">Parsley</label>
        </div>

        <div className="radio">
          <input
            type="radio"
            name="brand"
            value="thyme"
            checked={selected === "thyme"}
            onChange={onRadioChange}
            onClick={() => dispatch(thyme())}
          />
          <label htmlFor="thyme">Thyme</label>
        </div>
      </form>

      <div className="btn-continue-wrapper">
        {selected === null ? (
          <button className="btn-disabled">Continue</button>
        ) : (
          <Link className="btn-continue" to="/city">
            Continue
          </Link>
        )}
      </div>
    </div>
  );
};

export default RadioGroup;

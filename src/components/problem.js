import React, { useState, useReducer } from "react";
import "../index.css";

// Form handler
const formReduce = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

function Problem({ num, qcontent, ans, units /*, bstat = null*/ }) {
  const [bStat, setbStat] = useState(null);
  const [formData, setFormData] = useReducer(formReduce, {});

  // Submit handler
  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.values(formData)[0] == String(ans)) {
      setbStat(true);
    } else {
      setbStat(false);
    }
  };

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <div className="Problem bg-slate-800">
      <header
        className={`flex items-center justify-between bg-teal-500 ${
          bStat == null
            ? "bg-teal-500"
            : `${bStat ? "bg-green-500" : "bg-rose-500"}`
        }`}
      >
        <button className="my-3 ml-5 rounded bg-indigo-600 py-2 px-5 hover:bg-indigo-500">
          Details
        </button>
        <h1 className="font-xl justify-end px-5 text-2xl font-bold">{num}</h1>
      </header>
      <div className="p-5">
        <p>{qcontent}</p>
        <br />
        <form onSubmit={handleSubmit}>
          <input
            name="answer"
            onChange={handleChange}
            className="bg-gray-900 px-1 py-1"
          ></input>
          <br />
          <button
            type="submit"
            className="mt-9 rounded bg-indigo-600 py-1 px-3 text-xs hover:bg-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Problem;

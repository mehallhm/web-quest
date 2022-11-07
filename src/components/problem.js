import React, { useEffect, useState } from "react";
import "../index.css";

function Problem({ num, ans, obb, units }) {
  // Individual part validation
  const [bStat, setbStat] = useState(Array(obb.length).fill(null));
  // Whole problem validation
  const [aStat, setaStat] = useState(false);
  // Data collected directly from user inputs
  const [formData, setFormData] = useState(Array(obb.length).fill(null));
  // Earned points
  const [points, setPoints] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.toString() === ans.toString()) {
      setaStat(true);
    }
    const newValid = formData.map((datum, i) => {
      return datum === ans[i];
    });
    setbStat(newValid);

    console.log("Before bstat: " + bStat);
    console.log("formdata: " + formData);
    setPoints(bStat.filter((c) => c === true).length);
    console.log("After bstat: " + bStat);
    console.log("pts: " + points);
  };

  const handleChange = (event, index) => {
    const newData = formData.map((c, i) => {
      if (i === index) {
        return event.target.value;
      } else {
        return c;
      }
    });
    setFormData(newData);
  };

  // Conditional coloring
  const pCol =
    aStat == null ? "bg-teal-500" : aStat ? "bg-green-500" : "bg-rose-500";
  const sCol =
    aStat == null ? "bg-teal-600" : aStat ? "bg-green-600" : "bg-rose-600";

  // Generate paragraph & field for each problem part
  const partSet = obb.map((part, i) => (
    <div className="pb-8">
      <p>{part.question}</p>
      <br />
      <div className="flex items-center">
        <input
          name="answer"
          onChange={(event) => handleChange(event, i)}
          className={`rounded-md border-4 bg-gray-900 px-1 py-1 outline-none ${
            bStat[i] ? "border-green-500" : "border-red-500"
          }`}
          autoComplete="off"
          disabled={bStat[i]}
        ></input>
        <h3 className="pl-3 pb-1">{units[i]}</h3>
      </div>
    </div>
  ));

  return (
    <div className="Problem mt-10 rounded bg-slate-800">
      <header className={`flex items-center justify-between rounded-t ${pCol}`}>
        {/*${"bg-" + cCol + "-600"} -----------------------> ^^^*/}
        <div className="flex flex-row items-center">
          <button className="my-3 ml-5 rounded bg-indigo-600 py-2 px-5 hover:bg-indigo-500">
            Details
          </button>
          <h2 className={`ml-5 rounded p-2 font-bold ${sCol}`}>
            {points} / {obb.length}
          </h2>
        </div>
        <h1 className="font-xl justify-end px-5 text-2xl font-bold">{num}</h1>
      </header>
      <div className="grid-cols-1 p-5">
        <form onSubmit={handleSubmit}>
          {partSet}
          {!aStat && (
            <button
              type="submit"
              className="mt-4 rounded bg-indigo-600 py-1 px-3 text-xs hover:bg-indigo-500"
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Problem;

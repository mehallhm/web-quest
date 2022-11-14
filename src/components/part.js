import React from "react";

function Part() {
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
  return <div classname="part"></div>;
}

export default Part;

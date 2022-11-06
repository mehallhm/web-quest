import React, { useState /*, useReducer*/ } from "react";
import "../index.css";

// Form handler
// const formReduce = (state, event) => {
//   return {
//     ...state,
//     [event.name]: event.value,
//   };
// };

function Problem({ num, qcontent, ans, obb }) {
  // Individual part validation
  const [bStat, setbStat] = useState(Array(obb.length).fill(null));
  // Whole problem validation
  const [aStat, setaStat] = useState(false);
  // const [formData, setFormData] = useReducer(formReduce, {});
  const [formData, setFormData] = useState(Array(obb.length).fill(null));

  // Submit handler UNCOMMENT THIS -------<>--------
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (formData.toString() === ans.toString()) {
  //     setbStat(true);
  //   } else {
  //     setbStat(false);
  //   }
  // };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.toString() === ans.toString()) {
      setaStat();
    } else {
      const newValid = formData.map((datum, i) => {
        return datum === ans[i];
      });
      setbStat(newValid);
    }
  };

  // const handleChange = (event) => {
  //   setFormData({
  //     name: event.target.name,
  //     value: event.target.value,
  //   });
  // };

  const handleChange = (event, index) => {
    console.log("CHANGING LALALALALALALALALALALALALALA");
    const newData = formData.map((c, i) => {
      if (i === index) {
        return event.target.value;
      } else {
        return c;
      }
    });
    console.log(newData);
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
          className="bg-gray-900 px-1 py-1"
          autoComplete="off"
          disabled={bStat[i]}
        ></input>
        <h3 className="pl-3 pb-1">m/s</h3>
      </div>
    </div>
  ));

  return (
    <div className="Problem mt-10 bg-slate-800">
      <header className={`flex items-center justify-between ${pCol}`}>
        {/*${"bg-" + cCol + "-600"} -----------------------> ^^^*/}
        <div className="flex flex-row items-center">
          <button className="my-3 ml-5 rounded bg-indigo-600 py-2 px-5 hover:bg-indigo-500">
            Details
          </button>
          <h2 className={`ml-5 rounded p-2 font-bold ${sCol}`}>7/29</h2>
        </div>
        <h1 className="font-xl justify-end px-5 text-2xl font-bold">{num}</h1>
      </header>
      <div className="grid-cols-1 p-5">
        {/* <p>{obb.question}</p>
        <br /> */}
        <form onSubmit={handleSubmit}>
          {/* <input
            name="answer"
            onChange={handleChange}
            className="bg-gray-900 px-1 py-1"
            autoComplete="off"
            disabled={bStat}
          ></input>
          <br /> */}
          {partSet}
          {!bStat && (
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

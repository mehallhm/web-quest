import "../index.css";

function Problem({ num, qcontent }) {
  return (
    <div className="Problem bg-slate-800">
      <header className="flex items-center justify-between bg-teal-500">
        <button className="my-3 ml-5 rounded bg-indigo-600 py-2 px-5 hover:bg-indigo-500">
          Details
        </button>
        <h1 className="font-xl justify-end px-5 text-2xl font-bold">{num}</h1>
      </header>
      <div className="p-5">
        <p>{qcontent}</p>
        <br />
        <input className="bg-gray-900 px-1 py-1"></input>
        <br />
        <button className="mt-9 rounded bg-indigo-600 py-1 px-3 text-xs hover:bg-indigo-500">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Problem;

import "../App.css";
import Problem from "../components/problem";
import React from "react";
import Navbar from "../components/navbar";
import ProblemSet from "../components/problemSet";
import ProgressBar from "../components/progressBar";

function Set() {
  return (
    <div className="Set">
      <Navbar />
      <div className="mt-8">
        <ProgressBar />
      </div>
      <div className="mt-20 grid grid-cols-9 grid-rows-1">
        <div className="col-span-7 col-start-2">
          <ProblemSet />
        </div>
      </div>
    </div>
  );
}

export default Set;

import "../App.css";
import Problem from "../components/problem";
import React from "react";
import Navbar from "../components/navbar";

function SetView() {
  return (
    <div className="SetView">
      <Navbar />

      <div className="mt-20 grid grid-cols-9 grid-rows-1">
        <div className="col-span-7 col-start-2">
          <Problem
            num={1}
            qcontent={
              "This is an example question. Something would go here. Something very important. Something to make an individual question reality..."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default SetView;

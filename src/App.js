import "./App.css";
import Problem from "./subcomp/problem";
import React from "react";
import Navbar from "./subcomp/navbar";

function App() {
  return (
    <div className="App">
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

export default App;

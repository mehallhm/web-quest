import "./App.css";
import Problem from "./subcomp/problem";
import React, { useEffect, useState } from "react";

import { creds } from "../creds";


import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = creds;

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// const questions = {
//   hjksdfhkjlhflsd: {
//     question: "",
//     answer: 0,
//     units: "m/km"
//   }
// };


// // ( async () => {
// const querySnapshot = await getDocs(collection(db, "questions"));
//   querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} => ${doc.data()}`);
//     questions[doc.id] = doc.data();
//   });
// // })();


// console.log(questions);
// console.log(questions.PCCu7albRwmr6X0HB0Ji.answer)

const getData = async () => {
  let result;
  let querySnapshot = await getDocs(collection(db, "questions"));
    querySnapshot.forEach((doc) => {
      return doc.data();
  });
  // return result;
}

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
     // Fetching Data on Initial Load
     getData().then((data) => setData(data));
  },[])

  if (data == null) {
    return <div>Loading...</div>
  }


  return (
    <div className="App">
      <header className="bg-teal-400 py-4">
        <h1 className="ml-5 text-xl font-bold">WebQuest</h1>
      </header>

      <div className="mt-20 grid grid-cols-9 grid-rows-1">
        <div className="col-span-7 col-start-2">
          <Problem
            num={0}
            qcontent={
             data
            }
          />
        </div>
      </div>
    </div>
  );
}

export default App;

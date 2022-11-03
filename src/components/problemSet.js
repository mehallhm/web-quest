import React, { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import "../index.css";
import firebaseConfig from "../creds.js";
import QuestionLoader from "./questionLoader";
import Problem from "./problem";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const q = query(collection(db, "questions"), where("tag", "==", "physics"));

const getData = async () => {
  let result = [];
  let querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    result.push(doc.data());
  });
  return result;
};

function ProblemSet() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetching Data on Initial Load
    getData().then((data) => setData(data));
  }, []);

  if (data == null) {
    // return <div>Loading...</div>;
    return <QuestionLoader />;
  }

  const problems = data.map((data, i) => {
    return (
      <Problem
        num={i}
        qcontent={data.question}
        ans={data.answer}
        units={data.units}
        key={i}
        obb={data.problems}
      />
    );
  });

  return <div>{problems}</div>;
}

export default ProblemSet;

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
import Problem from "./problem";

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const q = query(collection(db, "questions"), where("units", "==", "m/s"));

const getData = async () => {
  let result;
  let querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    result = doc.data().question;
  });
  return result;
};

// Initialize Firebase

function ProblemSet() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetching Data on Initial Load
    getData().then((data) => setData(data));
  }, []);

  if (data == null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Problem num={0} qcontent={data} />
      <Problem num={0} qcontent={data} />
      <Problem num={0} qcontent={data} />
      <Problem num={0} qcontent={data} />
      <Problem num={0} qcontent={data} />
      <Problem num={0} qcontent={data} />
    </div>
  );
}

export default ProblemSet;

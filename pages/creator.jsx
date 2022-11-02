import Navbar from "../components/navbar";
import CreatorProblem from "../components/createrProblem";
import React, { useState } from "react";
// import { db } from "../public/firebase";
import { collection, addDoc } from "firebase/firestore";

import { initializeApp } from "firebase/app";
import firebaseConfig from "../public/creds.js";
import { getFirestore } from "@firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const sendData = async (data) =>
	await addDoc(collection(db, "questions"), {
		parts: data,
		tag: "Test",
	});

export default function Creator() {
	const [questions, setQuestions] = useState([]);
	const [questionData, setQuestionData] = useState([]);
	const [success, setSuccess] = useState(false);

	const handleQuestionDataUpdate = (num, parts) => {
		let newQuestionData = [...questionData];
		if (num == 0) newQuestionData.shift();
		newQuestionData[num] = parts;
		setQuestionData(newQuestionData);
	};

	const newProblem = () => {
		let newQuestion = (
			<CreatorProblem
				update={handleQuestionDataUpdate}
				num={questions.length + 1}
				key={questions.length}
			/>
		);

		setQuestions([...questions, newQuestion]);
		setQuestionData([...questionData, []]);
	};

	const save = () => {
		questionData.map(async (data, i) => {
			sendData(data);
		});
		setSuccess(true);
	};

	return (
		<div className="Creator">
			<Navbar />
			<div className="mt-20 grid grid-cols-9 grid-rows-1">
				<div className="col-span-7 col-start-2">
					{success && <h2>Saving Success!setData</h2>}
					{questions}
					<div className="flex justify-center">
						<button
							onClick={newProblem}
							className="my-4 ml-6 rounded bg-indigo-600 py-2 px-5 hover:bg-indigo-500"
						>
							New Problem
						</button>
						<button
							onClick={save}
							className="my-4 ml-6 rounded bg-indigo-600 py-2 px-5 hover:bg-indigo-500"
						>
							Save
						</button>
					</div>
				</div>
			</div>
			<h1>{questionData ? null : questionData[0][0].question}</h1>
		</div>
	);
}

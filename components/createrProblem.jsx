import React, { useState, useEffect } from "react";
import { app } from "../public/firebase.js";
import { collection, addDoc, getFirestore } from "firebase/firestore";

const db = getFirestore(app);

async function sendData(data, tag) {
	await addDoc(collection(db, "questions"), {
		parts: data,
		tag: tag,
	});
}

export default function CreatorProblem({ darkMode }) {
	const [tag, setTag] = useState("");
	const [parts, setParts] = useState([
		{
			part: "",
			answer: "",
			units: "",
			points: 0,
		},
	]);

	const color = darkMode
		? "bg-gradient-to-r from-blue-200 to-cyan-100"
		: "bg-slate-800";

	const border = darkMode && "rounded border-x-4 border-b-4 border-teal-400";

	const save = () => {
		sendData(parts, tag);
		// setSuccess(true);
	};

	const handleFormChange = (index, event) => {
		let data = [...parts];
		data[index][event.target.name] = event.target.value;
		setParts(data);
	};

	const handleTagChange = (event) => {
		setTag(event.target.value);
	};

	const addPart = () => {
		let newPart = {
			part: "",
			answer: "",
			units: "",
			points: 0,
		};

		setParts([...parts, newPart]);
	};

	const removePart = (index) => {
		let data = [...parts];
		data.splice(index, 1);
		setParts(data);
	};

	return (
		<div className={`Problem mt-10 ${color} ${border}`}>
			<header className={`flex items-center justify-between bg-teal-400`}>
				<div className="flex flex-row items-center">
					<button className="my-3 ml-5 rounded bg-indigo-600 py-2 px-5 hover:bg-indigo-500">
						Details
					</button>
					<input
						name="tag"
						placeholder="Question Tag"
						className={`m-2 ml-5 bg-teal-600 p-2 py-1 font-bold text-white placeholder-white outline-none`}
						autoComplete="off"
						value={tag}
						onChange={handleTagChange}
					/>
				</div>
				<h1 className="font-xl justify-end px-5 text-2xl font-bold">
					Creator
				</h1>
			</header>
			<div className="p-5">
				<form>
					{parts.map((input, index) => {
						return (
							<div key={index}>
								<p className="ml-2, mt-2">
									{"Part " + (index + 1)}
								</p>
								<textarea
									name="part"
									placeholder={
										"Part " + (index + 1) + " Question"
									}
									className="m-2 mt-6 w-11/12 bg-gray-900 px-1 py-1"
									autoComplete="off"
									value={input.part}
									onChange={(event) =>
										handleFormChange(index, event)
									}
								/>
								<br />
								<input
									name="answer"
									placeholder="Answer"
									className="m-2 bg-gray-900 px-1 py-1"
									autoComplete="off"
									value={input.answer}
									onChange={(event) =>
										handleFormChange(index, event)
									}
								/>
								<input
									name="units"
									placeholder="Units"
									className="m-1 bg-gray-900 px-1 py-1"
									autoComplete="off"
									value={input.units}
									onChange={(event) =>
										handleFormChange(index, event)
									}
								/>
								<input
									name="points"
									placeholder="Point Value"
									className="m-2 bg-gray-900 px-1 py-1"
									autoComplete="off"
									value={input.points}
									type="number"
									onChange={(event) =>
										handleFormChange(index, event)
									}
								/>
								{(!(index == 0) || parts.length > 1) && (
									<button
										onClick={() => removePart(index)}
										className="my-2 ml-5 rounded bg-indigo-600 py-2 px-5 hover:bg-indigo-500"
										type="button"
									>
										Remove
									</button>
								)}
							</div>
						);
					})}
				</form>
				<button
					onClick={addPart}
					className="m-2 mt-4 rounded bg-indigo-600 py-2 px-5 text-xs hover:bg-indigo-500"
				>
					New Part
				</button>
				<button
					onClick={save}
					className="my-2 ml-5 rounded bg-indigo-600 py-2 px-5 hover:bg-indigo-500"
					type="button"
				>
					Save
				</button>
			</div>
		</div>
	);
}

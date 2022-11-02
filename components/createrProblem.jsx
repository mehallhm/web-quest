import React, { useState } from "react";

export default function CreatorProblem({ num, update }) {
	const [parts, setParts] = useState([
		{
			question: "",
			answer: "",
			units: "",
		},
	]);

	const handleFormChange = (index, event) => {
		let data = [...parts];
		data[index][event.target.name] = event.target.value;
		setParts(data);
		update(num, parts);
	};

	const addParts = () => {
		let newPart = {
			question: "",
			answer: "",
			units: "",
		};

		setParts([...parts, newPart]);
	};

	return (
		<div className="Problem mt-10 bg-slate-800">
			<header className={`flex items-center justify-between bg-teal-500`}>
				<button className="my-3 ml-5 rounded bg-indigo-600 py-2 px-5 hover:bg-indigo-500">
					Details
				</button>
				<h1 className="font-xl justify-end px-5 text-2xl font-bold">
					{num}
				</h1>
			</header>
			<div className="p-5">
				<form>
					{/* <textarea
						name="question"
						placeholder="Question"
						className="m-2 mt-6 w-11/12 bg-gray-900 px-1 py-1"
						autoComplete="off"
						value={input.question}
						onChange={(event) => handleFormChange(index, event)}
					/> */}
					{parts.map((input, index) => {
						return (
							<div key={index}>
								<p className="ml-2, mt-2">
									{"Part " + (index + 1)}
								</p>
								<textarea
									name="question"
									placeholder={"Question Part " + (index + 1)}
									className="m-2 mt-6 w-11/12 bg-gray-900 px-1 py-1"
									autoComplete="off"
									value={input.question}
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
							</div>
						);
					})}
				</form>
				<button
					onClick={addParts}
					className="m-2 mt-4 rounded bg-indigo-600 py-2 px-5 text-xs hover:bg-indigo-500"
				>
					New Part
				</button>
			</div>
		</div>
	);
}

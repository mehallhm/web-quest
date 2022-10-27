import React from 'react';

export default function QuestionLoader() {
	const inside = (				
		<div className="h-56">
			<div className="h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-32 mb-2.5"></div>
			<div className="w-64 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
			<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-20 mt-40"></div>
		</div>
	);

	const elements = Array.from({length: 3}, (_, i) => {
		return (
			<div className="flex justify-between items-center pt-6" key={i}>
				{inside}
			</div>
		);
	  });

	return (
		<div role="status" className="p-4 space-y-4 max-w-100 rounded border border-gray-200 divide-y divide-gray-200 shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
			<div className="flex justify-between items-center">
				{inside}
			</div>
			{elements}
		
			<span className="sr-only">Loading...</span>
		</div>
	)
}
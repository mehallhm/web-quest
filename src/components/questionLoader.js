import React from 'react';

export default function QuestionLoader() {
	const inside = (				
		<div class="h-56">
			<div class="h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-32 mb-2.5"></div>
			<div class="w-64 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
			<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-20 mt-40"></div>
		</div>
	);

	const box = (
		<div class="flex justify-between items-center pt-6">
			{inside}
		</div>
	);

	const elements = Array.from({length: 3}, (_, index) => {
		return box;
	  });

	return (
		<div role="status" class="p-4 space-y-4 max-w-100 rounded border border-gray-200 divide-y divide-gray-200 shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700">
			<div class="flex justify-between items-center">
				{inside}
			</div>
			{elements}
		
			<span class="sr-only">Loading...</span>
		</div>
	)
}
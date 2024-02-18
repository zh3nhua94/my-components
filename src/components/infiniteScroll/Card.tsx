import React from "react";

const Card = ({ item }: any) => {
	return (
		// this is just a tailwind card
		<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
			<a href="#">
				<img
					className="rounded-t-lg object-contain h-48 w-full"
					src={item.images[0]}
					alt=""
				/>
			</a>
			<div className="p-5 flex flex-col justify-between flex-1 items-start">
				<div>
					<a href="#">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
					</a>
					<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
				</div>
				<a
					href="#"
					className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Read more
				</a>
			</div>
		</div>
		//END this is just a tailwind card
	);
};

export default Card;

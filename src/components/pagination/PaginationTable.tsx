import { useCallback, useEffect, useRef, useState } from "react";
import Pagination from "./Pagination";
import PaginationPosts from "./PaginationPosts";
import { useSearchParams } from "react-router-dom";

type postProps = {
	id: string;
	isInProduction: boolean;
	brand: string;
	model: string;
	color: string;
	createdAt: string;
	updatedAt: string;
};

const PaginationTable = ({ posts }: { posts: postProps[] }) => {
	const isDataEmpty = !Array.isArray(posts) || posts.length < 1 || !posts;
	const scrollRef = useRef<HTMLDivElement>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const [numbers, setNumbers] = useState<Array<number>>([]);
	const [itemPerPage, setItemPerPage] = useState(10);
	const [currentPage, setCurrentPage] = useState(1);
	const [maxPageLimit, setMaxPageLimit] = useState(5);
	const [minPageLimit, setMinPageLimit] = useState(0);
	const [searchParams] = useSearchParams();

	//Generate posts based on Pagination
	const lastSliceIndex = currentPage * itemPerPage;
	const firstSliceIndex = lastSliceIndex - itemPerPage;
	const generateRecords = (posts: postProps[]) => {
		return posts.slice(firstSliceIndex, lastSliceIndex);
	};
	const records = generateRecords(posts);

	// Calculate total number of pages based on items per page
	// and update the array of numbers of pagination accordingly
	const PaginationPages = useCallback(() => {
		if (itemPerPage !== 0) {
			const totalPage = Math.ceil(posts.length / itemPerPage);
			const numbersPages: Array<number> = [];
			for (let i = 0; i < totalPage; i++) {
				numbersPages.push(i + 1);
			}
			setNumbers(numbersPages);
		}
	}, [itemPerPage, posts]);

	// Trigger PaginationPages function when posts change
	useEffect(() => {
		PaginationPages();
	}, [currentPage, posts, itemPerPage, PaginationPages]);

	// Update current page based on URL query string
	useEffect(() => {
		setIsLoading(true);
		const page = parseInt(searchParams.get("page") || "1", 10);
		if (!isNaN(page)) {
			setCurrentPage(page);
		}
		setIsLoading(false);
	}, [searchParams]);

	//Loading
	if (isLoading) {
		return <div></div>;
	}

	return (
		<div id="listing">
			{!isDataEmpty ? (
				<section>
					<div
						className="listing__car-wrapper"
						id="car-table"
						ref={scrollRef}
					>
						<PaginationPosts records={records} />
					</div>

					<Pagination
						numbers={numbers}
						pageNumberLimit={5}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
						maxPageLimit={maxPageLimit}
						minPageLimit={minPageLimit}
						setMaxPageLimit={setMaxPageLimit}
						setMinPageLimit={setMinPageLimit}
						scrollRef={scrollRef}
					/>
				</section>
			) : (
				<div className="home__error-container">
					<h2>Opps, no results</h2>
					<p></p>
				</div>
			)}
		</div>
	);
};

export default PaginationTable;

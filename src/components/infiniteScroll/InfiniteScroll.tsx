import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
import Spinner from "./Spinner";

const InfiniteScroll = () => {
	const [product, setProduct] = useState<any[]>([]);
	const [hasMore, setHasMore] = useState(true);
	const [pageNumber, setPageNumber] = useState(0);
	const [isLoading, setIsLoading] = useState(false);

	//mark end of page
	const endOfPageRef = useRef<HTMLDivElement>(null);

	//callback function when we reach the end of the page
	const onIntersection = (entries: IntersectionObserverEntry[]) => {
		//Get the targeted Ref
		const firstEntry = entries[0];
		// console.log(firstEntry.target);

		// Check if the target element is currently intersecting with the viewport and there are more items to fetch
		if (firstEntry.isIntersecting && hasMore) {
			fetchMoreItems();
		}
	};

	useEffect(() => {
		const observer = new IntersectionObserver(onIntersection);
		if (observer && endOfPageRef.current) {
			// If both the observer and the ref exist, start observing the endOfPageRef
			observer.observe(endOfPageRef.current);
		}

		//cleanup => disconnect observer
		return () => {
			if (observer) {
				observer.disconnect();
			}
		};
	});

	//fetch next batch of page items
	const fetchMoreItems = async () => {
		setIsLoading(true);
		try {
			const res = await fetch(`https://dummyjson.com/products?limit=12&skip=${pageNumber * 12}`);
			const data = await res.json();
			if (data.products.length > 0) {
				setProduct([...product, ...data.products]);
				setPageNumber(pageNumber + 1);
			} else {
				setHasMore(false);
			}
		} catch (err) {
			console.log(err);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div style={{ maxWidth: "1200px", margin: "0px auto", padding: "50px 0" }}>
			<div className="grid grid-cols-3 gap-4">
				{product?.map((item) => (
					<Card
						key={item.id}
						item={item}
					/>
				))}
			</div>
			{hasMore && (
				<div
					className="loadmore-Ref"
					ref={endOfPageRef}
				>
					{isLoading && <Spinner />}
				</div>
			)}
		</div>
	);
};

export default InfiniteScroll;

import { useEffect, useRef, useState } from "react";
import Spinner from "../shared/Spinner";

const LazyImage = ({ dataSrc, alt }: { dataSrc: string; alt: string }) => {
	const imgRef = useRef<HTMLImageElement | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const img = imgRef.current;
						if (!img) return;

						img.src = dataSrc;
						img.onload = () => {
							setIsLoading(false);
							observer.unobserve(entry.target);
						};
					}
				});
			},
			{ rootMargin: "100px" }
		);

		if (imgRef.current) {
			observer.observe(imgRef.current);
		}

		return () => {
			if (imgRef.current) {
				observer.unobserve(imgRef.current);
			}
		};
	}, [dataSrc]);

	return (
		<div className="image-container">
			{isLoading && <Spinner className="spinner" />}
			<img
				ref={imgRef}
				alt={alt}
			/>
		</div>
	);
};

export default LazyImage;

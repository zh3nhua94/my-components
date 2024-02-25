import "./lazyLoadingPage.css";
import LazyImage from "../../components/LazyLoading/LazyImage";

const LazyLoadingPage = () => {
	return (
		<div style={{ maxWidth: "800px", margin: "0px auto", padding: "50px 0" }}>
			<div style={{ height: "100vh", textAlign: "center" }}>scroll to see lazy loading</div>
			{/* Placeholder images with data-src attribute */}
			<div className="text-container">
				<LazyImage
					dataSrc="https://via.placeholder.com/300"
					alt="Image 1"
				/>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
					magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum.
				</p>
			</div>
			<div className="text-container">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
					magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum.
				</p>
				<LazyImage
					dataSrc="https://via.placeholder.com/400"
					alt="Image 2"
				/>
			</div>
			<div className="text-container">
				<LazyImage
					dataSrc="https://via.placeholder.com/500"
					alt="Image 3"
				/>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
					magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum.
				</p>
			</div>
		</div>
	);
};

export default LazyLoadingPage;

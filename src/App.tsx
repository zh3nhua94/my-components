import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Pagination from "./pages/pagination/Pagination";
import DarkModePage from "./pages/darkModeToggle/DarkModePage";
import ProgressBarScrollPage from "./pages/progressBar/ProgressBarScrollPage";
import ProgressBarPage from "./pages/progressBar/ProgressBarPage";
import LoadingSkeletonPage from "./pages/loadingSkeleton/LoadingSkeletonPage";
import InfiniteScrollPage from "./pages/infiniteScroll/infiniteScrollPage";
import CountdownButtonPage from "./pages/countdownButton/countdownButtonPage";
import LazyLoadingPage from "./pages/lazyLoading/LazyLoadingPage";
import ModalPage from "./pages/Modal/ModalPage";
import MultiStepFormPage from "./pages/MultiStepForm/MultiStepFormPage";

function App() {
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/pagination"
					element={<Pagination />}
				/>
				<Route
					path="/darkMode"
					element={<DarkModePage />}
				/>
				<Route
					path="/progress-bar"
					element={<ProgressBarPage />}
				/>
				<Route
					path="/progress-bar-scroll"
					element={<ProgressBarScrollPage />}
				/>
				<Route
					path="/loading-skeleton"
					element={<LoadingSkeletonPage />}
				/>
				<Route
					path="/infinite-scroll"
					element={<InfiniteScrollPage />}
				/>
				<Route
					path="/countdown-Button"
					element={<CountdownButtonPage />}
				/>
				<Route
					path="/lazy-loading-img"
					element={<LazyLoadingPage />}
				/>
				<Route
					path="/modal-portal"
					element={<ModalPage />}
				/>
				<Route
					path="/multi-step-form"
					element={<MultiStepFormPage />}
				/>
			</Routes>
		</>
	);
}

export default App;

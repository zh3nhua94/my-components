import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Pagination from "./pages/pagination/Pagination";
import DarkModePage from "./pages/darkModeToggle/DarkModePage";
import ProgressBarScrollPage from "./pages/progressBar/ProgressBarScrollPage";
import ProgressBarPage from "./pages/progressBar/ProgressBarPage";

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
			</Routes>
		</>
	);
}

export default App;

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Pagination from "./pages/pagination/Pagination";
import DarkModePage from "./pages/darkModeToggle/DarkModePage";

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
			</Routes>
		</>
	);
}

export default App;

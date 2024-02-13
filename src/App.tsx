import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Pagination from "./pages/pagination/Pagination";

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
			</Routes>
		</>
	);
}

export default App;

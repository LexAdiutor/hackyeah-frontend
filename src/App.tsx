// import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Index from "./routes/Index";
import NotFound from "./errors/NotFound";
// import Home from "./components/home/Home";
// import NotFound from "./components/notfound/NotFound";
// import "./index.css"
import RootLayout from "./layouts/RootLayout";
import Unexpected from "./errors/Unexpected";

function App() {
	const a = {
		c: "s",
		v: 0,
	};

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<RootLayout />}>
					<Route errorElement={<Unexpected />}>
						<Route index={true} element={<Index />} />
						<Route path="/*" element={<NotFound />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

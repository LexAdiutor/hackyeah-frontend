// import React from "react";
import { Route, BrowserRouter, Routes, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Index from "./routes/Index";
import NotFound from "./errors/NotFound";
// import Home from "./components/home/Home";
// import NotFound from "./components/notfound/NotFound";
// import "./index.css"
import RootLayout from "./layouts/RootLayout";
import Unexpected from "./errors/Unexpected";
import Login, { action as loginAction } from "./routes/Login";
import Register, { action as registerAction } from "./routes/Register";
import Chat from "./routes/Chat";
import Visualization from "./components/Visualization";
import Test from "./routes/Test";

function App() {

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<RootLayout />}>
				<Route errorElement={<Unexpected />}>
					{/* <Route index={true} element={<Index />} /> */}
					<Route path="/login" element={<Login />} action={loginAction} />
					<Route path="/register" element={<Register />} action={registerAction} />
					<Route index={true} element={<Chat />} />
					<Route path="/test" element={<Test />} />

					<Route path="/*" element={<NotFound />} />
				</Route>
			</Route>
		)
	)

	return (
		<RouterProvider router={router} />
	);
}

export default App;

import { Link, Outlet } from "react-router-dom";
import "../index.css";

export default function RootLayout() {
	return (
		<div className="h-dvh flex flex-col [&>*]:container">
			<header className="flex justify-between py-2">
				<h1 className="text-3xl font-semibold">
					<Link to={"/"}>logo</Link>
				</h1>
				<nav>
					<button className="btn btn-primary">home</button>
				</nav>
			</header>
			<main className="flex-1">
				<Outlet />
			</main>
			<footer>
				<p className="text-center p-2">copyright 2024</p>
			</footer>
		</div>
	);
}

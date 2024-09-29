import { Link, Outlet } from "react-router-dom";
import "../index.css";
import SideMenu from "../components/SideMenu";

export default function RootLayout() {
	const handleClick = async () => {
		console.log("request send");
		try {
			const data = await fetch(
				"https://standaryzacjadanych.hoga.pl/www/urzedy.asp",
				{
					method: "POST",
					body: new URLSearchParams("etap=1&miasto=Kulerz&kod=32-031&woj=ma%B3opolskie&ulica=&ndom=40&ok=Szukaj"),
					headers: {
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*",
						
					},
				}
			);

			console.log(data)

			// console.log(await data.text());
		} catch (error) {
			console.log("Błąd po stronie serwera", error);
		}
	};


	return (
		<>
			<SideMenu />
			<div className="max-h-[100dvh] flex flex-col [&>*]:container relative">
				<header className="flex justify-between py-2">
					<h1 className="text-3xl font-semibold">
						<Link to={"/"}>logo</Link>
					</h1>
					<nav className="space-x-2">
						<button className="btn btn-primary hover:btn-secondary" onClick={handleClick}>home</button>
						<Link to={"/login"} className="btn btn-secondary hover:btn-primary">login</Link>
						<Link to={"/register"} className="btn btn-secondary hover:btn-primary">register</Link>
						<Link to={"/chat"} className="btn btn-secondary hover:btn-primary">chat</Link>
					</nav>
				</header>
				<main className="flex-1">
					<Outlet />
				</main>
				<footer>
					<p className="text-center p-2">© 2024 LexAdiutor</p>
				</footer>
			</div>
		</>
		
	);
}

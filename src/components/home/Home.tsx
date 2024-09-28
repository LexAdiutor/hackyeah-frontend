import React from "react";
// import './Home.css';
import "./../../index.css";

const Home = () => {
	const handleClick = async () => {
		try {
			const data = await fetch(
				import.meta.env.VITE_API_BACKEND_URL + "/test",
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			alert(await data.text());
		} catch {
			alert("Błąd po stronie serwera");
		}
	};

	return (
		<div className="home__container bg-red-500">
			<h1 className="home__title">LexAdiutor</h1>
			<p className="home__description">Trwają prace nad stroną</p>
			<button onClick={handleClick}>Zaciągnij dane z serwera</button>

			<p className="bg-red-500 text-green-400">skibidi</p>
		</div>
	);
};

export default Home;

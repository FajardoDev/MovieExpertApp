import { useState } from "react";
import { InputAddPelis } from "./components/InputAddPelis";
import { Error } from "./components/Error";
import { ShowGridPeliculasApi } from "./components/ShowGridPeliculasApi";

function MovieExpertApp() {
	const [peliculas, setPeliculas] = useState(["X Men", "Rapido y Furioso"]);
	const [error, setError] = useState(false);

	const onAddPeliculas = (newPeliculas) => {
		if (peliculas.includes(newPeliculas)) {
			setError("Verifique que el nombre no exista");

			setTimeout(() => {
				setError(false);
			}, 5000);
			return;
		}

		setError(false);
		setPeliculas((peliculas) => [newPeliculas, ...peliculas]);
	};

	return (
		<>
			<div className="mx-auto container">
				<div className="my-6 mx-auto max-w-md text-center">
					<h1 className="text-4xl font-black text-center border border-dashed border-gray-300 inline-block py-4 px-10 bg-white rounded-xl shadow-xl shadow-black">
						Movie Expert App
					</h1>
				</div>
				<div>
					{error && <Error>{error}</Error>}
					<InputAddPelis
						// setPeliculas={setPeliculas}
						onNewPeliculas={(e) => onAddPeliculas(e)}
						error={error}
						setError={setError}
					/>
				</div>

				<div>
					{peliculas.map((pelicula) => (
						<ShowGridPeliculasApi key={pelicula} pelicula={pelicula} />
					))}
				</div>
			</div>
		</>
	);
}

export default MovieExpertApp;
{
	/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 "></span>; 
	
	<li key={pelis}>{pelis}</li>
	*/
}

import { useFetchPelis } from "../hooks/useFetchPelis";
import { PelisGridItem } from "./PelisGridItem";

export const ShowGridPeliculasApi = ({ pelicula }) => {
	const { imagenes, isLoading } = useFetchPelis(pelicula);

	return (
		<>
			<h2
				className="my-8 text-3xl bg-clip-text text-transparent 
			bg-gradient-to-r from-yellow-500 to-red-500 font-extrabold"
			>
				{pelicula}
			</h2>

			{isLoading && (
				<div className="sk-fading-circle">
					<div className="sk-circle1 sk-circle"></div>
					<div className="sk-circle2 sk-circle"></div>
					<div className="sk-circle3 sk-circle"></div>
					<div className="sk-circle4 sk-circle"></div>
					<div className="sk-circle5 sk-circle"></div>
					<div className="sk-circle6 sk-circle"></div>
					<div className="sk-circle7 sk-circle"></div>
					<div className="sk-circle8 sk-circle"></div>
					<div className="sk-circle9 sk-circle"></div>
					<div className="sk-circle10 sk-circle"></div>
					<div className="sk-circle11 sk-circle"></div>
					<div className="sk-circle12 sk-circle"></div>
				</div>
			)}

			<div className="grid md:grid-cols-3 gap-5 mx-2 md:mx-0">
				{imagenes.map((image) => (
					// <ul key={id}> <li> {title} </li> </ul>
					<PelisGridItem key={image.id} {...image} />
				))}
			</div>
		</>
	);
};

// https://api.themoviedb.org/3/movie/now_playing?api_key=5424f81b1d1238498c3d5037f2300f6a&query=${pelicula}&language=es-ES&page=1

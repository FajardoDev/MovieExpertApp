export const getPeliculas = async (pelicula) => {
	const url = `https://api.themoviedb.org/3/search/movie?api_key=5424f81b1d1238498c3d5037f2300f6a&query=${pelicula}&language=es-ES`;
	const resp = await fetch(url);
	const { results } = await resp.json();
	// console.log(results);

	const pelis = results.map((img) => ({
		id: img.id,
		img_url: img.backdrop_path,
		img_url1: img.poster_path,
		lenguaje: img.original_language,
		title: img.title,
		descripcion: img.overview,
		fecha: img.release_date,
		votantes: img.vote_count,
		popularidad: img.popularity,
		voto_prom: img.vote_average,
	}));

	console.log(pelis);
	return pelis;
};

// Author identity unknown

// *** Please tell me who you are.

// Run

//   git config --global user.email "you@example.com"
//   git config --global user.name "Your Name"

// to set your account's default identity.
// Omit --global to set the identity only in this repository.

// fatal: empty ident name (for <ariel-dev@FajardoDev.>) not allowed
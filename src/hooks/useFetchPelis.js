import { useEffect, useState } from "react";
import { getPeliculas } from "../helpers/getPeliculas";

export const useFetchPelis = (pelicula) => {
	const [imagenes, setImagenes] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getImages = async () => {
		const newImages = await getPeliculas(pelicula);
		setImagenes(newImages);
		setIsLoading(false);
	};

	//! Todo el objeto de las imagenes Ir al archivo getGifs (2)
	useEffect(() => {
		getImages();
	}, []);

	return {
		imagenes,
		isLoading,
	};
};

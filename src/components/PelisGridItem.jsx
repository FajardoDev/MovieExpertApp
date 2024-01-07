export const PelisGridItem = ({
	title,
	descripcion,
	img_url1,
	fecha,
	voto_prom,
	votantes,
}) => {
	const imagePath = "https://image.tmdb.org/t/p/original";

	const imgUrl = `${imagePath}${img_url1}`;

	let resena = parseFloat(`${voto_prom}`);
	resena = voto_prom;

	const review = resena / 2;

	const reviews = review.toFixed(1);

	resena = reviews;
	Number(resena);

	return (
		<div className="bg-white rounded-md max-w-3xl pb-6 space-y-2">
			<img
				className="w-full h-[30rem] max-w-3xl rounded-t-md text-red-700"
				src={imgUrl}
				alt={`Imagen ${title}`}
			/>
			<p className="text-lg max-w-md text-orange-600 font-semibold mx-4">
				{title}
			</p>

			<div className="flex">
				<p className="text-xs max-w-md text-orange-600 font-semibold mx-4">
					{reviews}
				</p>

				<div>
					{resena >= 4.8 ? (
						<>
							{/* Aquí */}
							<i class="fa-solid fa-star text-orange-500"></i>
							<i class="fa-solid fa-star text-orange-500"></i>
							<i class="fa-solid fa-star text-orange-500"></i>
							<i class="fa-solid fa-star text-orange-500"></i>
							<i class="fa-solid fa-star text-orange-500"></i>
						</>
					) : null || resena >= 4.3 ? (
						<>
							{/* Aquí */}
							<i class="fa-solid fa-star text-orange-500"></i>
							<i class="fa-solid fa-star text-orange-500"></i>
							<i class="fa-solid fa-star text-orange-500"></i>
							<i class="fa-solid fa-star text-orange-500"></i>
							<i class="fa-solid fa-star-half-stroke text-orange-500"></i>
						</>
					) : null || resena >= 3.8 ? (
						<>
							{/* Aquí */}
							<i class="fa-solid fa-star text-orange-500"></i>
							<i class="fa-solid fa-star text-orange-500"></i>
							<i class="fa-solid fa-star text-orange-500"></i>
							<i class="fa-solid fa-star text-orange-500"></i>
							<i class="fa-solid fa-star"></i>
						</>
					) : null || resena >= 3.3 ? (
						<>
							{/* Aquí */}
							<i class="fa-solid fa-star text-orange-500"></i>
							<i class="fa-solid fa-star text-orange-500"></i>
							<i class="fa-solid fa-star text-orange-500"></i>
							<i class="fa-solid fa-star-half-stroke text-orange-500"></i>
							<i class="fa-solid fa-star"></i>
						</>
					) : null || resena >= 2.8 ? (
						<>
							{/* Aquí */}
							<i class="fa-solid fa-star text-orange-500"></i>
							<i class="fa-solid fa-star text-orange-500"></i>
							<i class="fa-solid fa-star text-orange-500"></i>
							<i class="fa-solid fa-star"></i>
							<i class="fa-solid fa-star"></i>
						</>
					) : null || resena >= 2.3 ? (
						<>
							{/* Aquí */}
							<i class="fa-solid fa-star text-orange-500"></i>
							<i class="fa-solid fa-star text-orange-500"></i>
							<i class="fa-solid fa-star-half-stroke text-orange-500"></i>
							<i class="fa-solid fa-star"></i>
							<i class="fa-solid fa-star"></i>
						</>
					) : null || resena >= 1.8 ? (
						<>
							{/* Aquí */}
							<i class="fa-solid fa-star text-orange-500"></i>
							<i class="fa-solid fa-star text-orange-500"></i>
							<i class="fa-solid fa-star"></i>
							<i class="fa-solid fa-star"></i>
							<i class="fa-solid fa-star"></i>
						</>
					) : null || resena >= 1.3 ? (
						<>
							{/* Aquí */}
							<i class="fa-solid fa-star text-orange-500"></i>
							<i class="fa-solid fa-star-half-stroke text-orange-500"></i>
							<i class="fa-solid fa-star"></i>
							<i class="fa-solid fa-star"></i>
							<i class="fa-solid fa-star"></i>
						</>
					) : null || resena >= 0.8 ? (
						<>
							{/* Aquí */}
							<i class="fa-solid fa-star text-orange-500"></i>
							<i class="fa-solid fa-star"></i>
							<i class="fa-solid fa-star"></i>
							<i class="fa-solid fa-star"></i>
							<i class="fa-solid fa-star"></i>
						</>
					) : null || resena >= 0.3 ? (
						<>
							{/* Aquí */}
							<i class="fa-solid fa-star-half-stroke text-orange-500"></i>
							<i class="fa-solid fa-star"></i>
							<i class="fa-solid fa-star"></i>
							<i class="fa-solid fa-star"></i>
							<i class="fa-solid fa-star"></i>
						</>
					) : null || resena >= 0 ? (
						<>
							{/* Aquí */}
							<p className="text-orange-500 text-xs">(Sin Calificar)</p>
						</>
					) : null}
				</div>

				<p className="text-xs max-w-md text-orange-600 font-semibold mx-4">
					{`(${votantes})`}
				</p>
			</div>

			<p className="text-sm max-w-md text-yellow-600 font-semibold mx-4">
				{fecha}
			</p>
		</div>
	);
};

{
	/* <p>{resena >= 5 ? <span>Hola</span> : null}</p>; 
	
	Otra
		{
                     

					 resena >= 4.8 ? <i class="fa-solid fa-star text-orange-500"></i>
				 <i class="fa-solid fa-star text-orange-500"></i>
				 <i class="fa-solid fa-star text-orange-500"></i>
				 <i class="fa-solid fa-star text-orange-500"></i>
				 <i class="fa-solid fa-star text-orange-500"></i> : null || resena >= 4.3 ?  <i class="fa-solid fa-star text-orange-500"></i>
				 <i class="fa-solid fa-star text-orange-500"></i>
				 <i class="fa-solid fa-star text-orange-500"></i>
				 <i class="fa-solid fa-star text-orange-500"></i>
				 <i class="fa-solid fa-star-half-stroke text-orange-500"></i>  <>
					 </>: null  || resena >= 3.8 ? <i class="fa-solid fa-star text-orange-500"></i>
				 <i class="fa-solid fa-star text-orange-500"></i>
				 <i class="fa-solid fa-star text-orange-500"></i>
				 <i class="fa-solid fa-star text-orange-500"></i>
				 <i class="fa-solid fa-star"></i>  <>
					 </>: null  || resena >= 3.3 ? <i class="fa-solid fa-star text-orange-500"></i>
				 <i class="fa-solid fa-star text-orange-500"></i>
				 <i class="fa-solid fa-star text-orange-500"></i>
				 <i class="fa-solid fa-star-half-stroke text-orange-500"></i>
				 <i class="fa-solid fa-star"></i> <></> : null || resena >= 2.8 ? <i class="fa-solid fa-star text-orange-500"></i>
				 <i class="fa-solid fa-star text-orange-500"></i>
				 <i class="fa-solid fa-star text-orange-500"></i>
				 <i class="fa-solid fa-star"></i>
				 <i class="fa-solid fa-star"></i><></> : null
				  }
	
	
	*/
}

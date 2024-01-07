import { useState } from "react";
// setPeliculas
export const InputAddPelis = ({ onNewPeliculas, error, setError }) => {
	const [inputValue, setInputValue] = useState("");

	const onInputChange = ({ target }) => {
		const valor = target.value;
		setInputValue(valor);

		if (!/^\D+$/.test(valor)) {
			setError("El valor no debe contener números");

			setTimeout(() => {
				setInputValue("");
			}, 200);
			setTimeout(() => {
				setError(false);
			}, 5000);
			return;
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (inputValue.trim().length <= 1) {
			setError("Agrega algo");

			setTimeout(() => {
				setError(false);
			}, 5000);
			return;
		}

		setError(false);
		onNewPeliculas(inputValue.trim());
		setInputValue("");
		// setPeliculas((peliculas) => [inputValue, ...peliculas]);
	};

	return (
		<div>
			<form className="my-8 mx-auto max-w-3xl" onSubmit={handleSubmit}>
				<label className="relative block max-w-full">
					<span className="sr-only ">Search</span>
					<button
						type="submit"
						className={` absolute inset-y-0 right-0 flex items-center pl-6 focus:outline-none rounded-full py-4 px-6 cursor-pointer duration-200 bg-orange-300   hover:bg-orange-400 ${
							error
								? " placeholder:text-red-600/60 focus:border-red-500 focus:ring-red-500 border border-red-600 "
								: "focus:border-sky-500 focus:ring-sky-500 border border-white"
						}
						  `}
					>
						<i
							className={`fa-solid fa-magnifying-glass duration-200 text-[1.3rem] mt-1 ${
								error ? "text-red-600/90" : "text-sky-600/90 hover:text-yellow-400"
							} `}
						></i>
					</button>

					<input
						type="text"
						name="search"
						value={inputValue}
						onChange={onInputChange}
						className={`hover:bottom-5 placeholder:italic bg-white w-full border  block  rounded-full py-3 pl-12 pr-3 shadow-md shadow-black/50 focus:outline-none sm:text-sm text-slate-700 font-semibold text-base focus:ring-1 ${
							error
								? " placeholder:text-red-600/60 focus:border-red-500 focus:ring-red-500 border border-red-600"
								: " placeholder:text-sky-600/60  focus:border-sky-500 focus:ring-sky-500 border border-white"
						}     `}
						placeholder={
							error
								? "Este campo no puede tener nombre existente, ir vacío ó contener números"
								: "Buscar pelis..."
						}
					/>
				</label>
				{/* {console.log(error)} */}
				{/* {error && "Hola mundo"} 
			
				${
							error && "border-red-600"
						}
				
				*/}
			</form>
		</div>
	);
};

// "hover:bottom-5",
// 							"placeholder:italic",
// 							"placeholder:text-sky-600/60",
// 							"block",
// 							"bg-white",
// 							"w-full",
// 							"border",
// 							"border-white",
// 							"rounded-full",
// 							" py-3",
// 							"pl-12",
// 							" pr-3",
// 							"shadow-md ",
// 							"shadow-black/50",
// 							"focus:outline-none",
// 							"focus:border-sky-500 ",
// 							"focus:ring-sky-500 ",
// 							"focus:ring-1",
// 							"sm:text-sm",
// 							"text-slate-700",
// 							"font-semibold",
// 							"text-base")

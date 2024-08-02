import type { TBook } from "@types";
import type { ReactNode } from "react";

export const Book = ({
	cover,
	title,
	isBookAdded,
	onAddReadLater,
	onRemoveReadLater,
}: TBook): ReactNode => (
	<li className="list-none" title={title}>
		<figure className="shadow shadow-gray-400 flex flex-col justify-center items-center">
			<img className="w-full h-[500px]" src={cover} alt={title} />
			<figcaption className="text-center my-5">
				<h2 className="text-md uppercase text-white mb-2">{title}</h2>
				<button
					className="text-xs py-1 px-2 border border-white text-white hover:bg-white hover:text-black"
					type="button"
					onClick={isBookAdded ? onRemoveReadLater : onAddReadLater}
				>
					{isBookAdded ? "Borrar de leer más tarde" : "Leer más tarde"}
				</button>
			</figcaption>
		</figure>
	</li>
);

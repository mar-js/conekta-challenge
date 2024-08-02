import type { TReadBook } from "@types";
import type { ReactNode } from "react";

export const ReadBook = ({
	ISBN,
	title,
	author,
	year,
	genre,
	synopsis,
	onRemoveReadLater,
}: TReadBook): ReactNode => (
	<div className="relative">
		<details className="border mb-10 p-6 text-white" name={ISBN}>
			<summary className="text-2xl">{title}</summary>
			<div className="px-10 mt-5">
				<h3 className="opacity-50">
					Libro escrito por: <b>{author?.name}</b> en el año <span>{year}</span>
					, del género <i>{genre}</i>
				</h3>
				<p className="text-xl">{synopsis}</p>
			</div>
		</details>
		<button
			type="button"
			className="absolute top-6 right-6 bg-red-500 text-white text-4xl hover:opacity-60"
			onClick={onRemoveReadLater}
		>
			␡
		</button>
	</div>
);

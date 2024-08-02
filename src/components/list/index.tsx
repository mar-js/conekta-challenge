import type { IList } from "@types";
import type { ReactNode } from "react";

export const List = ({
	booksLength,
	readLaterBooksLength,
}: IList): ReactNode => (
	<ul className="my-5 text-gray-200">
		<li title={`${booksLength - readLaterBooksLength}`}>
			Libros disponibles: {booksLength - readLaterBooksLength}
		</li>
		<li title={`${readLaterBooksLength}`}>
			Libros para leer más tarde: {readLaterBooksLength}
		</li>
	</ul>
);

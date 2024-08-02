import type { IFilter, IList, TBook, TReadBook } from "@types";

export const DATA_BOOK: TBook = {
	title: "El Señor de los Anillos",
	cover:
		"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg",
	isBookAdded: false,
	onAddReadLater: () => {
		DATA_BOOK.isBookAdded = true;
	},
	onRemoveReadLater: () => {
		DATA_BOOK.isBookAdded = false;
	},
};

export const DATA_READ_BOOK: TReadBook = {
	ISBN: "978-0618640157",
	title: "El Señor de los Anillos",
	year: 1954,
	genre: "Fantasía",
	synopsis:
		"Una aventura épica en un mundo de fantasía llamado la Tierra Media.",
	author: {
		name: "J.R.R. Tolkien",
		otherBooks: ["El Hobbit", "El Silmarillion"],
	},
	onRemoveReadLater: () => {
		console.log("Book remove");
	},
};

export const DATA_LIST: IList = {
	booksLength: 13,
	readLaterBooksLength: 2,
};

export const DATA_FILTER: IFilter = {
	onBooksFilter: ({ target }) => {
		const { value } = target;

		console.log(value);
	},
};

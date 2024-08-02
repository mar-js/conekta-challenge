import type { ChangeEvent } from "react";

export type TGenders = "Terror" | "Fantasía" | "Zombies" | "Ciencia ficción";

export interface IBook {
	title: string;
	pages: number;
	genre: string;
	cover: string;
	synopsis: string;
	year: number;
	ISBN: string;
	author: IAuthor;
}

export interface IAuthor {
	name: string;
	otherBooks: string[];
}

export interface ILibraryModel {
	readLaterBooks: IBook[] | [];
	books: IBook[] | [];
	isRead: boolean;
	booksLength: number;
	readLaterBooksLength: number;
	handlerBookAdded: (ISBN: string) => boolean;
	handlerAddReadLater: (ISBN: string) => void;
	handlerRemoveReadLater: (ISBN: string) => void;
	handlerIsRead: () => void;
	handlerBooksFilter: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export type TBook = Partial<IBook> & {
	isBookAdded: boolean;
	onRemoveReadLater: () => void;
	onAddReadLater: () => void;
};

export type TReadBook = Partial<IBook> & {
	onRemoveReadLater: () => void;
};

export interface IFilter {
	onBooksFilter: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export interface IList {
	booksLength: number;
	readLaterBooksLength: number;
}

import { LibraryModel } from "@contexts";
import { library } from "@db/books.json";
import type { IBook, ILibraryModel } from "@types";
import {
	type ChangeEvent,
	type PropsWithChildren,
	type ReactNode,
	useCallback,
	useEffect,
	useState,
} from "react";

export const LibraryProvierd = ({ children }: PropsWithChildren): ReactNode => {
	const formattedLibrary = library.map(({ book }) => book);
	const parseBooks = JSON.parse(localStorage.books || "[]");
	const [books, setBooks] = useState<IBook[] | []>(formattedLibrary);
	const [readLaterBooks, setReadLaterBooks] = useState<IBook[] | []>(
		parseBooks,
	);
	const [isRead, setIsRead] = useState<boolean>(false);

	const getBook = (ISBN: string) => books.find((book) => book.ISBN === ISBN);

	const handlerBookAdded = (ISBN: string): boolean =>
		Boolean(readLaterBooks.find((book) => book.ISBN === ISBN));

	const handlerAddReadLater = (ISBN: string) => {
		if (handlerBookAdded(ISBN)) return;

		const book = getBook(ISBN);

		if (typeof book === "undefined") return;

		setReadLaterBooks((prevData) => {
			const data = [...prevData, book];
			localStorage.setItem("books", JSON.stringify(data));
			return data;
		});
	};

	const handlerRemoveReadLater = (ISBN: string) => {
		const book = getBook(ISBN);

		if (typeof book === "undefined") return;

		setReadLaterBooks((prevData) => {
			const data = prevData.filter((pD) => pD.ISBN !== book.ISBN);
			localStorage.setItem("books", JSON.stringify(data));
			return data;
		});
	};

	const handlerIsRead = () => {
		setIsRead((prev) => !prev);
	};

	const handlerBooksFilter = ({ target }: ChangeEvent<HTMLSelectElement>) => {
		const { value } = target;
		const newBooks =
			value === "All"
				? formattedLibrary
				: formattedLibrary.filter((book) => book.genre === value);

		setBooks(newBooks);
	};

	const handlerStorage = useCallback(({ key, newValue }: StorageEvent) => {
		// if ([key, newValue].includes(null)) return;

		if (key === null || newValue === null) return;

		const parseData = JSON.parse(newValue);

		localStorage.setItem(key, newValue);

		setReadLaterBooks(parseData);
	}, []);

	const booksLength = formattedLibrary.length;
	const readLaterBooksLength = readLaterBooks.length;

	useEffect(() => {
		window.addEventListener("storage", handlerStorage);

		return () => {
			window.removeEventListener("storage", handlerStorage);
		};
	}, [handlerStorage]);

	const value: ILibraryModel = {
		books,
		isRead,
		readLaterBooks,
		booksLength,
		readLaterBooksLength,
		handlerBookAdded,
		handlerAddReadLater,
		handlerRemoveReadLater,
		handlerIsRead,
		handlerBooksFilter,
	};

	return (
		<LibraryModel.Provider value={value}>{children}</LibraryModel.Provider>
	);
};

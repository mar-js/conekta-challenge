import { Book, Filters, List, ReadBook } from "@components";
import { useLibraryContext } from "@contexts";
import { Header } from "@layouts/Header";
import { Main } from "@layouts/Main";
import { Nav } from "@layouts/Nav";
import type { ReactNode } from "react";

export const App = (): ReactNode => {
	const {
		books,
		readLaterBooks,
		isRead,
		booksLength,
		readLaterBooksLength,
		handlerBookAdded,
		handlerAddReadLater,
		handlerIsRead,
		handlerRemoveReadLater,
		handlerBooksFilter,
	} = useLibraryContext();

	return (
		<>
			<Header>
				<Nav>
					<button className="text-7xl" type="button" onClick={handlerIsRead}>
						{isRead ? "📖" : "📚"}
					</button>
				</Nav>
			</Header>
			<Main>
				{!isRead && (
					<>
						<Filters onBooksFilter={handlerBooksFilter} />
						<List
							booksLength={booksLength}
							readLaterBooksLength={readLaterBooksLength}
						/>
					</>
				)}
				{isRead ? (
					<div>
						{readLaterBooks.map((readBook) => (
							<ReadBook
								key={readBook.ISBN}
								ISBN={readBook.ISBN}
								title={readBook.title}
								author={readBook.author}
								year={readBook.year}
								synopsis={readBook.synopsis}
								genre={readBook.genre}
								onRemoveReadLater={() => handlerRemoveReadLater(readBook.ISBN)}
							/>
						))}
					</div>
				) : (
					<ul className="w-full grid grid-cols-auto gap-6">
						{books.map((book) => (
							<Book
								key={book.ISBN}
								cover={book.cover}
								title={book.title}
								isBookAdded={handlerBookAdded(book.ISBN)}
								onRemoveReadLater={() => handlerRemoveReadLater(book.ISBN)}
								onAddReadLater={() => handlerAddReadLater(book.ISBN)}
							/>
						))}
					</ul>
				)}
			</Main>
		</>
	);
};

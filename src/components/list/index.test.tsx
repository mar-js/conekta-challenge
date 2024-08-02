import { DATA_LIST } from "@mocks";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { List } from "./";

describe("List component", () => {
	it("should render List component", () => {
		render(<List {...DATA_LIST} />);
	});

	it("should look for the component that says available books", () => {
		render(<List {...DATA_LIST} />);

		const booksLength = screen.getByTitle(
			(DATA_LIST.booksLength - DATA_LIST.readLaterBooksLength).toString(),
		);

		expect(booksLength.innerText).toEqual("Libros disponibles: 11");
	});

	it("should look for the component that says which books to read later", () => {
		render(<List {...DATA_LIST} />);

		const readLaterBooksLength = screen.getByTitle(
			DATA_LIST.readLaterBooksLength.toString(),
		);

		expect(readLaterBooksLength.innerText).toEqual(
			"Libros para leer más tarde: 2",
		);
	});
});

import { DATA_BOOK } from "@mocks";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Book } from "./";

describe("Book component", () => {
	it("should render Book component", () => {
		render(<Book {...DATA_BOOK} />);
	});

	it("should find the title", () => {
		render(<Book {...DATA_BOOK} />);

		screen.getByText(DATA_BOOK.title as string);
	});

	it("should find the button to add the book to: Read Later", () => {
		render(<Book {...DATA_BOOK} />);

		expect(screen.getByText("Leer más tarde")).toBeTruthy();
	});

	it("should the user click on the button to add the book to: Read later", () => {
		const { rerender } = render(<Book {...DATA_BOOK} />);

		const btnReadLater = screen.getByRole("button");

		expect(btnReadLater.innerText).toEqual("Leer más tarde");

		fireEvent.click(btnReadLater);

		rerender(<Book {...DATA_BOOK} />);

		expect(btnReadLater.innerText).toEqual("Borrar de leer más tarde");
	});

	it("should find the button to add the book to: Delete from reading later", () => {
		DATA_BOOK.isBookAdded = true;

		render(<Book {...DATA_BOOK} />);

		expect(screen.getByText("Borrar de leer más tarde")).toBeTruthy();
	});

	it("should the user click on the button to add the book to: Read later", () => {
		DATA_BOOK.isBookAdded = true;

		const { rerender } = render(<Book {...DATA_BOOK} />);

		const btnReadLater = screen.getByRole("button");

		expect(btnReadLater.innerText).toEqual("Borrar de leer más tarde");

		fireEvent.click(btnReadLater);

		rerender(<Book {...DATA_BOOK} />);

		expect(btnReadLater.innerText).toEqual("Leer más tarde");
	});
});

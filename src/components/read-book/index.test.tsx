import { DATA_READ_BOOK } from "@mocks";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ReadBook } from "./";

describe("ReadBook component", () => {
	it("should render ReadBook component", () => {
		render(<ReadBook {...DATA_READ_BOOK} />);
	});

	it("should find the title", () => {
		render(<ReadBook {...DATA_READ_BOOK} />);

		screen.getByText(DATA_READ_BOOK.title as string);
	});

	it("should the user click on the button to add the book to: Read later", () => {
		vi.spyOn(console, "log");

		render(<ReadBook {...DATA_READ_BOOK} />);

		const btnRemoveBook = screen.getByRole("button");

		expect(btnRemoveBook.innerText).toEqual("␡");

		fireEvent.click(btnRemoveBook);

		expect(console.log).toHaveBeenCalledWith("Book remove");
	});
});

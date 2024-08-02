import { DATA_FILTER } from "@mocks";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Filters } from ".";

describe("Filters component", () => {
	it("should render Filters component", () => {
		render(<Filters {...DATA_FILTER} />);
	});

	it("should be the default value: All", () => {
		vi.spyOn(console, "log");

		render(<Filters {...DATA_FILTER} />);

		const selectElement = screen.getByDisplayValue("All");

		fireEvent.change(selectElement);

		expect(console.log).toHaveBeenCalledWith("All");
	});

	it("should be the default value: Fantasía", () => {
		vi.spyOn(console, "log");

		render(<Filters {...DATA_FILTER} />);

		const selectComponent = screen.getByTestId("filters");

		fireEvent.change(selectComponent, {
			target: { value: "Fantasía" },
		});

		expect(console.log).toHaveBeenCalledWith("Fantasía");
	});

	it("should be the default value: Terror", () => {
		vi.spyOn(console, "log");

		render(<Filters {...DATA_FILTER} />);

		const selectComponent = screen.getByTestId("filters");

		fireEvent.change(selectComponent, {
			target: { value: "Terror" },
		});

		expect(console.log).toHaveBeenCalledWith("Terror");
	});

	it("should be the default value: Zombies", () => {
		vi.spyOn(console, "log");

		render(<Filters {...DATA_FILTER} />);

		const selectComponent = screen.getByTestId("filters");

		fireEvent.change(selectComponent, {
			target: { value: "Zombies" },
		});

		expect(console.log).toHaveBeenCalledWith("Zombies");
	});

	it("should be the default value: Ciencia ficción", () => {
		vi.spyOn(console, "log");

		render(<Filters {...DATA_FILTER} />);

		const selectComponent = screen.getByTestId("filters");

		fireEvent.change(selectComponent, {
			target: { value: "Ciencia ficción" },
		});

		expect(console.log).toHaveBeenCalledWith("Ciencia ficción");
	});
});

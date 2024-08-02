import { GENDERS } from "@constants";
import type { IFilter } from "@types";
import type { ReactNode } from "react";

export const Filters = ({ onBooksFilter }: IFilter): ReactNode => (
	<select
		className="p-2"
		data-testid="filters"
		name="filters"
		onChange={onBooksFilter}
	>
		<option value="All" defaultValue="All">
			All
		</option>
		{GENDERS.map((genre) => (
			<option key={genre} value={genre}>
				{genre}
			</option>
		))}
	</select>
);

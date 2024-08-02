import { LibraryProvierd } from "@providers";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import "@styles";

const root = document.getElementById("root") as HTMLElement;

createRoot(root).render(
	<StrictMode>
		<LibraryProvierd>
			<App />
		</LibraryProvierd>
	</StrictMode>,
);

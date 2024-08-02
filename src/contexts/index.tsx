import type { ILibraryModel } from "@types";
import { createContext, useContext } from "react";

export const LibraryModel = createContext({} as ILibraryModel);
export const useLibraryContext = () => useContext(LibraryModel);

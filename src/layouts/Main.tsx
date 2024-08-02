import type { PropsWithChildren, ReactNode } from "react";

export const Main = ({ children }: PropsWithChildren): ReactNode => (
	<main className="w-full h-auto">{children}</main>
);

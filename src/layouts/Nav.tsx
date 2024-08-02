import type { PropsWithChildren, ReactNode } from "react";

export const Nav = ({ children }: PropsWithChildren): ReactNode => (
	<nav className="text-center">{children}</nav>
);

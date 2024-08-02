import type { PropsWithChildren, ReactNode } from "react";

export const Header = ({ children }: PropsWithChildren): ReactNode => (
	<header className="mb-6">{children}</header>
);

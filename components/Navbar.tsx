import { ReactNode } from "react";

export default function Navbar({ children }: { children?: ReactNode }) {
    return (
        <nav className="p-4 border-b border-gray-400 flex-shrink-0 flex-grow-0 w-full flex items-center justify-between">
            <h1 className="text-3xl text-gray-400 font-text">Pixie</h1>
            {children}
        </nav>
    )
}
import Link from "next/link";
import React from "react";

export default function Header() {
    return (
        <nav className="navbar justify-between px-10 bg-base-100">
            <Link href='/' className="text-blue-500 text-lg font-bold">ESTATE FLOW</Link>
            <div className="flex h-full w-fit gap-2">
                <Link href='/'>Home</Link>
                <Link href='/Properties'>Properties</Link>
                <Link href='/agents'>Agents</Link>
            </div>
            <div className="p-6 w-fit h-[50px] flex items-center justify-center bg-blue-500 text-lg rounded-lg">
                Login
            </div>
</nav>
   )
} 
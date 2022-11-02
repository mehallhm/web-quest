import Link from "next/link";
import React from "react";

function Navbar() {
	return (
		<div className="Navbar">
			<header className="flex items-center justify-between bg-teal-400 py-4">
				<h1 className="ml-5 text-xl font-bold">
					Web-Based Quiz System
				</h1>
				<div className="mr-5 flex">
					<Link href="/" className="p-2">
						Home
					</Link>
					<Link href="/problems" className="p-2">
						Probelms
					</Link>
					<Link href="/creator" className="p-2">
						Creator
					</Link>
				</div>
			</header>
		</div>
	);
}

export default Navbar;

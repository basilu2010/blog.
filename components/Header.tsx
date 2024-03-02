import Link from "next/link";
import React from "react";

function Header() {
	return (
		<div>
			<div className="navbar bg-base-100">
				<div className="flex-1">
					<Link
						href={"/"}
						className="btn btn-ghost font-sans font-black text-xl"
					>
						Blog<span className="text-[#ff7878]">.</span>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Header;

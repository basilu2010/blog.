import React from "react";

function Hero() {
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content text-center">
				<div className="max-w-md">
					<h1 className="text-5xl font-bold">
						This is Blog<span className="text-[#ff7878]">.</span>
					</h1>
					<p className="py-6">
						The{" "}
						<span className="underline decoration-2 decoration-[#ff7878]">
							No.1
						</span>{" "}
						Blog
					</p>
				</div>
			</div>
		</div>
	);
}

export default Hero;

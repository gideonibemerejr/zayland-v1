import React, { useEffect } from "react";
import { getNobodyKnowsPlatforms } from "../../data";

const platforms = getNobodyKnowsPlatforms();
const NobodyKnows = ({ setCurrentPage }) => {
	useEffect(() => {
		setCurrentPage("NOBODY KNOWS");
	}, [setCurrentPage]);
	return (
		<main className="w-100 vh-75 h-100-l flex justify-center items-center">
			<section className="w-100 flex flex-column  justify-center items-center mh5-l pa2 pa0-ns">
				<div className="w-100 w-75-l h-75 mb2 flex justify-center items-center">
					<img
						src="https://zayland-assets.s3.amazonaws.com/images/Zayland_NobodyKnows_FinalCover.png"
						alt=""
						className="w-50-ns w-100"
					/>
				</div>
				<div className="flex justify-center items-center mt4 pa2">
					{platforms.map((platform, idx) => (
						<div key={platform.title} className="h-25 mh3">
							<a href={platform.link} rel="noopener noreferrer" target="_blank">
								<img
									className="h3-ns w3-ns h2 w2 dib"
									src={platform.iconSrc}
									alt=""
								/>
							</a>
						</div>
					))}
				</div>
			</section>
		</main>
	);
};

export default NobodyKnows;

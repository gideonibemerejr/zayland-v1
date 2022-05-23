import React from "react";
import { Instagram, Twitter } from "..";

const Footer = () => {
	return (
		<nav className="db dt-l w-100 border-box pa3 ph5-l absolute-l bottom-0-l">
			<ul className="list flex ma0 pa0 items-center justify-start-l justify-center">
				<a
					className="db dtc-l v-mid white link dim tc tl-l mb2 mb0-l mr3"
					href="https://www.instagram.com/zaylandxx"
					rel="noopener noreferrer"
					target="_blank"
				>
					<Instagram />
				</a>
				<a
					className="db dtc-l v-mid white link dim tc tl-l mb2 mb0-l mr3"
					href="https://www.twitter.com/zaylandxx"
					rel="noopener noreferrer"
					target="_blank"
				>
					<Twitter />
				</a>
				<p className="white" style={{ fontSize: ".75rem" }}>
					© 2021 Zay's Land c/o The Nu Wave Sound
				</p>
			</ul>
		</nav>
	);
};

export default Footer;

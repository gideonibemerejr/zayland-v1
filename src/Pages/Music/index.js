import React from "react";
import useAudio from "../../utils/useAudio";
import { demoTrackURL } from "../../data";

const Music = () => {
	const [playing, toggle] = useAudio(demoTrackURL);

	return (
		<div>
			Don't Come Back DEMO <h2>Don't Come Back DEMO</h2>{" "}
			<p onClick={toggle}>{playing ? "Pause" : "Play"}</p>
		</div>
	);
};

export default Music;

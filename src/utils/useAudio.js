import { useState, useEffect } from "react";

const useAudio = (url) => {
	const [audio] = useState(new Audio(url));
	const [duration, setDuration] = useState();
	const [curTime, setCurTime] = useState();
	const [playing, setPlaying] = useState(false);
	const [clickedTime, setClickedTime] = useState();

	const toggle = () => setPlaying(!playing);

	useEffect(() => {
		playing ? audio.play() : audio.pause();
	}, [playing, audio]);

	useEffect(() => {
		const setAudioData = () => {
			setDuration(audio.duration);
			setCurTime(audio.currentTime);
		};

		const setAudioTime = () => setCurTime(audio.currentTime);

		// DOM listeners: update React state on DOM events
		audio.addEventListener("loadeddata", setAudioData);

		audio.addEventListener("timeupdate", setAudioTime);

		if (clickedTime && clickedTime !== curTime) {
			audio.currentTime = clickedTime;
			setClickedTime(null);
		}

		audio.addEventListener("ended", () => setPlaying(false));

		return () => {
			audio.removeEventListener("ended", () => setPlaying(false));
			audio.removeEventListener("loadeddata", setAudioData);
			audio.removeEventListener("timeupdate", setAudioTime);
		};
	}, [audio, clickedTime, curTime]);

	return { curTime, duration, playing, toggle, setClickedTime };
};

export default useAudio;

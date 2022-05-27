import React from "react";
import ReactPlayer from "react-player";
import { getVideos } from "../../data";

const videos = getVideos();
const Watch = () => {
	return (
		<main className="w-100 vh-75-l flex flex-column justify-center items-center">
			<div className="pa2 flex flex-column flex-row-l flex-wrap flex-wrap-reverse items-center justify-center w-100">
				{videos.map((video, idx) => (
					<div className="w-50-ns w-100 flex flex-column justify-center items-center pa3 white-80">
						<ReactPlayer
							url={video.url}
							className="player"
							width="100%"
							height=""
						/>
						<h2 className="f3-ns f red">{video.title}</h2>
					</div>
				))}
			</div>
			{/* <section className='w-100  pa2 '>
        <article className='h-100 flex flex-column justify-center items-center'>
          
        </article>
      </section> */}
		</main>
	);
};

export default Watch;

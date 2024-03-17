import ReactPlayer from 'react-player'

import './index.css'

const videoURL = 'https://www.youtube.com/watch?v=jg5d59ligW4'
const VideoPlayer = () => (
	<div className="video-container">
		<ReactPlayer
			url={videoURL}
			width="400px"
			height="200px"
			className="video"
		/>
		<button className="buy-btn">Buy</button>
	</div>
)

export default VideoPlayer
import './App.css'
import VideoPlayer from './components/VideoPlayer'
import Introduction from './components/Introduction'
import TalkToUs from './components/TalkToUs'

const App = () => (
	<div className="bg-container">
		<Introduction />
		<VideoPlayer />
		<TalkToUs/>
	</div>
)
export default App
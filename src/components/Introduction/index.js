import './index.css'
import { RiWhatsappLine } from 'react-icons/ri'

const Introduction = (props) => (
	<div className="intro-container">
		<h1 className="main-heading">Mobishaala</h1>
		<p className="description">
			Create your{' '}
			<span className="highlighted-text">Digital Classroom</span> in 5
			mins for <span className="highlighted-text">FREE</span> & connect to
			1+ Million Students.
		</p>
		<ul className="list-items-container">
			<li>No technical knowledge required.</li>
			<li>Quickly setup live class,tests,notes,ebooks and more.</li>
			<li>Reach out to millions of students anywhere,anytime.</li>
		</ul>
		<div>
			<p className="sub-description">Institute/Teacher</p>
			<button className="btn">Get Started</button>
		</div>
		<div>
			<p className="sub-description">Student</p>
			<button className="btn">Download App</button>
		</div>

		<button className="talk-to-us-btn">
			<RiWhatsappLine className="whatsapp-icon" />
			Talk to us.
		</button>
	</div>
)
export default Introduction
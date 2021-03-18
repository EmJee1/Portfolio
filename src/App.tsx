import './style/globals.scss'

import { useRef } from 'react'

import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Experiences from './components/Experiences'
import Technologies from './components/Technologies'
import Contact from './components/Contact'

const App = () => {
	const aboutRef = useRef(null)
	const skillsRef = useRef(null)
	const experiencesRef = useRef(null)
	const technologiesRef = useRef(null)
	const contactRef = useRef(null)

	return (
		<>
			<Navbar
				aboutRef={aboutRef}
				skillsRef={skillsRef}
				experiencesRef={experiencesRef}
				technologiesRef={technologiesRef}
				contactRef={contactRef}
			/>
			<Header />
			<About aboutRef={aboutRef} />
			<Skills skillsRef={skillsRef} />
			<Experiences experiencesRef={experiencesRef} />
			<Technologies technologiesRef={technologiesRef} />
			<Contact contactRef={contactRef} />
		</>
	)
}

export default App

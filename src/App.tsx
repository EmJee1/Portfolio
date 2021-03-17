import './style/globals.scss'

import { useRef } from 'react'

import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Experiences from './components/Experiences'
import Technologies from './components/Technologies'

const App = () => {
	const aboutRef = useRef(null)
	const skillsRef = useRef(null)
	const experiencesRef = useRef(null)
	const technologiesRef = useRef(null)

	return (
		<>
			<Navbar
				aboutRef={aboutRef}
				skillsRef={skillsRef}
				experiencesRef={experiencesRef}
				technologiesRef={technologiesRef}
			/>
			<Header />
			<About aboutRef={aboutRef} />
			<Skills skillsRef={skillsRef} />
			<Experiences experiencesRef={experiencesRef} />
			<Technologies technologiesRef={technologiesRef} />
		</>
	)
}

export default App

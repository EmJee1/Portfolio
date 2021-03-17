import './style/globals.scss'

import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Experiences from './components/Experiences'
import { useRef } from 'react'

const App = () => {
	const aboutRef = useRef(null)
	const skillsRef = useRef(null)
	const experiencesRef = useRef(null)

	return (
		<>
			<Navbar
				aboutRef={aboutRef}
				skillsRef={skillsRef}
				experiencesRef={experiencesRef}
			/>
			<Header />
			<About aboutRef={aboutRef} />
			<Skills skillsRef={skillsRef} />
			<Experiences experiencesRef={experiencesRef} />
		</>
	)
}

export default App

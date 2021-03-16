import './style/globals.scss'

import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Experiences from './components/Experiences'

const App = () => {
	return (
		<>
			<Navbar />
			<Header />
			<About />
			<Skills />
			<Experiences />
		</>
	)
}

export default App

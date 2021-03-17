import { MutableRefObject } from 'react'
import './style.scss'

interface navbarProps {
	aboutRef: MutableRefObject<any>
	skillsRef: MutableRefObject<any>
	experiencesRef: MutableRefObject<any>
}

const Navbar = ({ aboutRef, skillsRef, experiencesRef }: navbarProps) => {
	return (
		<nav className='navbar navbar-expand-lg container'>
			<div className='container-fluid'>
				<p className='navbar-brand'>Mart-Jan</p>
				<button
					className='navbar-toggler collapsed'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarScroll'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarScroll'>
					<ul className='navbar-nav mt-4'>
						<li
							className='nav-item'
							onClick={() =>
								aboutRef.current.scrollIntoView({ behaviour: 'smooth' })
							}
						>
							<p className='nav-link'>About</p>
						</li>
						<li
							className='nav-item'
							onClick={() =>
								skillsRef.current.scrollIntoView({ behaviour: 'smooth' })
							}
						>
							<p className='nav-link'>Skills</p>
						</li>
						<li
							className='nav-item'
							onClick={() =>
								experiencesRef.current.scrollIntoView({ behaviour: 'smooth' })
							}
						>
							<p className='nav-link'>Experiences</p>
						</li>
						<li className='nav-item'>
							<p className='nav-link'>Technologies</p>
						</li>
						<li className='nav-item'>
							<p className='nav-link'>Contact</p>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar

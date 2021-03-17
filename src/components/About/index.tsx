import { MutableRefObject } from 'react'
import cartoonImage from '../../assets/images/Cartoonify.svg'
import './style.scss'

interface aboutProps {
	aboutRef: MutableRefObject<any>
}

const About = ({ aboutRef }: aboutProps) => {
	return (
		<div className='about-me' id='about-me' ref={aboutRef}>
			<div className='about-me-cartoon'>
				<img src={cartoonImage} alt='A cartoon version of me' />
			</div>
			<div className='about-me-inner'>
				<div className='container'>
					<h2>
						I'm Mart-Jan, <br />
						welcome on my website!
					</h2>
					<p>
						I am a dutch webdeveloper, specializing in <br />
						back-end development. I'm always up for learning <br />
						new technologies, and my knowledge is constantly <br />
						evolving. My skills range from front-end tools to <br />
						databases and mobile development.
					</p>
				</div>
			</div>
		</div>
	)
}

export default About

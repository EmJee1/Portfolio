import { MutableRefObject } from 'react'

import frontEndIcon from '../../assets/icons/front-end.svg'
import databaseIcon from '../../assets/icons/database.svg'
import backEndIcon from '../../assets/icons/back-end.svg'
import mobileIcon from '../../assets/icons/mobile.svg'

import Skill from './Skill'
import './style.scss'

interface skillsProps {
	skillsRef: MutableRefObject<any>
}

const Skills = ({ skillsRef }: skillsProps) => {
	const skills = [
		{
			description: 'Relational and document based databases',
			icon: databaseIcon,
			alt: 'Database icon',
		},
		{
			description: "Back-end creation of API's and infrastructures",
			icon: backEndIcon,
			alt: 'Back-end icon',
		},
		{
			description: 'Front-end development and design',
			icon: frontEndIcon,
			alt: 'Front-end icon',
		},
		{
			description: 'Mobile development with React Native',
			icon: mobileIcon,
			alt: 'Mobile icon',
		},
	]

	return (
		<div className='skills' id='skills' ref={skillsRef}>
			<div className='container'>
				<h2>
					Skills <span></span>
				</h2>
				<div className='row'>
					<div className='col-12 mx-auto'>
						<div className='skills-wrap'>
							{skills.map((skill, index) => (
								<Skill
									key={index}
									alt={skill.alt}
									icon={skill.icon}
									description={skill.description}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills

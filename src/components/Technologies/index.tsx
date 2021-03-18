import './style.scss'

import { MutableRefObject } from 'react'

import typeScriptIcon from '../../assets/icons/programmingIcons/typescript-plain.svg'
import VSCodeIcon from '../../assets/icons/programmingIcons/visualstudio-plain.svg'
import nodejsIcon from '../../assets/icons/programmingIcons/nodejs-original.svg'

import Technology from './Technology'

interface technologiesProps {
	technologiesRef: MutableRefObject<any>
}

const Technologies = ({ technologiesRef }: technologiesProps) => {
	const technologies = [
		{
			title: 'Node.js',
			proficiency: 'Advanced',
			description:
				'I love node because it allows developers to use JavaScript on both the front- as well as the back-end',
			icon: nodejsIcon,
		},
		{
			title: 'TypeScript',
			proficiency: 'Advanced',
			description:
				'TypeScript might be the best thing that ever happened to JavaScript. Adding type-checking to JS eliminates a lot of bugs.',
			icon: typeScriptIcon,
		},
		{
			title: 'Visual Studio Code',
			proficiency: 'Advanced',
			description:
				'What is a developer without his IDE? My weapon of choice is VS Code, because it is very customizable and lightweigt.',
			icon: VSCodeIcon,
		},
	]

	return (
		<div className='technologies' ref={technologiesRef}>
			<div className='container'>
				<h2>My favorite technologies</h2>
				<p className='mb-0'>Not all the ones I worked with 😄</p>
				<div className='row technologies-block'>
					<div className='col-12 col-lg-10 col-xl-8 mx-auto'>
						<Technology technologies={technologies} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Technologies

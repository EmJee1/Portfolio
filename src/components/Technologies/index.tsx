import './style.scss'

import { MutableRefObject } from 'react'

import typeScriptIcon from '../../assets/icons/programmingIcons/typescript-plain.svg'
import VSCodeIcon from '../../assets/icons/programmingIcons/visualstudio-plain.svg'
import mongoDBIcon from '../../assets/icons/programmingIcons/mongodb-original.svg'
import nodejsIcon from '../../assets/icons/programmingIcons/nodejs-original.svg'
import reactIcon from '../../assets/icons/programmingIcons/react-original.svg'
import adobeXdIcon from '../../assets/icons/programmingIcons/xd-plain.svg'
import gitIcon from '../../assets/icons/programmingIcons/git-original.svg'
import phpIcon from '../../assets/icons/programmingIcons/php-plain.svg'

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
				'I love node because it allows developers to use JavaScript on both the front- as well as the back-end.',
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
				'What is a developer without his IDE? My weapon of choice is VS Code, because it is very customizable and lightweight.',
			icon: VSCodeIcon,
		},
		{
			title: 'Adobe XD',
			proficiency: 'Intermediate',
			description:
				'My favorite web and app design tool is Adobe XD. It does the job, and it has some neat functionality that helps the develpment process.',
			icon: adobeXdIcon,
		},
		{
			title: 'React.js',
			proficiency: 'Advanced',
			description:
				'My go-to javascript framework has to be React.js. Expecially in combination with typescript, front-end development goes as smooth as a breeze.',
			icon: reactIcon,
		},
		{
			title: 'MongoDB',
			proficiency: 'Advanced',
			description:
				'I really like MongoDB for its simplicity. It is my most-used database, and using it with mongoose has made an amazing development experience.',
			icon: mongoDBIcon,
		},
		{
			title: 'PHP',
			proficiency: 'Intermediate',
			description:
				"PHP is one of the easier-to-learn back-end development languages, but that does not limit it's capabilities.",
			icon: phpIcon,
		},
		{
			title: 'GIT',
			proficiency: 'Advanced',
			description:
				'Git is the industry-standard for version-control. I have primarily used GitHub, but also have some experience with BitBucket.',
			icon: gitIcon,
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

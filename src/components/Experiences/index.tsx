import './style.scss'

import { MutableRefObject } from 'react'

import studentAanHuisBanner from '../../assets/images/studentAanHuisBanner.png'
import getJobsDoneBanner from '../../assets/images/getJobsDoneBanner.png'
import reclamestalBanner from '../../assets/images/reclamestalBanner.png'
import PCScoreBanner from '../../assets/images/PCScoreBanner.png'
import Experience from './Experience'

interface experiencesProps {
	experiencesRef: MutableRefObject<any>
}

const Experiences = ({ experiencesRef }: experiencesProps) => {
	const experiencesContent = [
		{
			title: 'GetJobsDone',
			companyLink: 'https://getjobsdone.nl/',
			workedWith: ['Laravel', 'React', 'React Native'],
			startedAt: 'March 2021',
			stoppedAt: undefined,
			image: getJobsDoneBanner,
			alt: 'Banner GetJobsDone',
			key: 1,
		},
		{
			title: 'Reclamestal',
			companyLink: 'https://reclamestal.nl/',
			workedWith: ['WordPress', 'Gutenberg', 'PHP'],
			startedAt: 'September 2020',
			stoppedAt: 'February 2020',
			image: reclamestalBanner,
			alt: 'Banner Reclamestal',
			key: 2,
		},
		{
			title: 'StudentAanHuis',
			companyLink: 'https://www.studentaanhuis.nl/',
			workedWith: ['Technical support', 'Windows', 'Networking'],
			startedAt: 'February 2020',
			stoppedAt: 'October 2020',
			image: studentAanHuisBanner,
			alt: 'Banner Student Aan Huis',
			key: 3,
		},
		{
			title: 'PCScore',
			companyLink: 'https://www.pcscore.nl/',
			workedWith: ['IT Helpdesk', 'Shop assistant', 'Hardware knowledge'],
			startedAt: 'January 2019',
			stoppedAt: 'February 2020',
			image: PCScoreBanner,
			alt: 'Banner PCScore',
			key: 4,
		},
	]

	return (
		<>
			<div className='experiences' id='experiences' ref={experiencesRef}>
				<hr />
				<div className='container'>
					<h2>Experiences</h2>
					<div className='experiences-row'>
						{experiencesContent.slice(0, 2).map((experienceContent, index) => (
							<div className='experiences-item-wrap'>
								<Experience
									{...experienceContent}
									key={experienceContent.key}
								/>
							</div>
						))}
					</div>
					<div className='experiences-row'>
						{experiencesContent.slice(2, 4).map((experienceContent, index) => (
							<div className='experiences-item-wrap'>
								<Experience
									{...experienceContent}
									key={experienceContent.key}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default Experiences

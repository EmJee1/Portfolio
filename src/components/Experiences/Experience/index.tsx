import './style.scss'

interface experienceParams {
	title: string
    companyLink: string
	workedWith: string[]
	startedAt: string
	stoppedAt: string | undefined
	image: string
}

const Experience = ({
	title,
    companyLink,
	workedWith,
	startedAt,
	stoppedAt,
	image,
}: experienceParams) => {
	return (
		<div className='experience-item'>
			<img src={image} alt='' />
			<div className='experience-item-filter'></div>
			<div className='experience-item-inner'>
				<h5 onClick={() => window.open(companyLink)}>{title}</h5>
				<ul>
					{workedWith.map((tech, index) => (
						<li key={index}>- {tech}</li>
					))}
				</ul>
				<p>
					{startedAt} - {stoppedAt ? stoppedAt : 'present'}
				</p>
			</div>
		</div>
	)
}

export default Experience

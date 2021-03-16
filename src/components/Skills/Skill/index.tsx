import './style.scss'

interface SkillParams {
	description: string
	alt: string
	icon: string
}

const Skill = ({ description, icon, alt }: SkillParams) => {
	return (
		<div className='skill-item'>
			<img src={icon} alt={alt} />
			<p>{description}</p>
		</div>
	)
}

export default Skill

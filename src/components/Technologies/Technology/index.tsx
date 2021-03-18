import './style.scss'

import { useEffect, useState } from 'react'

interface technology {
	title: string
	proficiency: string
	description: string
	icon: string
}

interface technologyProps {
	technologies: technology[]
}

const Technology = ({ technologies }: technologyProps) => {
	const [selectedTechnology, setSelectedTechnology] = useState(technologies[0])
	const [animating, setAnimating] = useState(false)

	const shuffleArray = (array: technology[]) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			;[array[i], array[j]] = [array[j], array[i]]
		}
	}

	const selectNewTechnology = () => {
		if (technologies.indexOf(selectedTechnology) === technologies.length - 1)
			setSelectedTechnology(technologies[0])
		else
			setSelectedTechnology(
				technologies[technologies.indexOf(selectedTechnology) + 1]
			)
	}

	useEffect(() => {
		shuffleArray(technologies)
		setSelectedTechnology(technologies[0])
	}, [technologies])

	useEffect(() => {
		setAnimating(true)
		setTimeout(() => {
			setAnimating(false)
		}, 600)
	}, [selectedTechnology])

	return (
		<div className='technology-item'>
			<div className='container'>
				<div className='row'>
					<div className='col-12 col-xl-11 mx-auto'>
						<div
							className={`technology-item-inner ${animating ? 'animate' : ''}`}
						>
							<div className='technology-item-inner-left'>
								<h3>{selectedTechnology.title}</h3>
								<p className='technology-proficiency'>
									Proficiency: {selectedTechnology.proficiency}
								</p>
								<p className='technology-description'>
									{selectedTechnology.description}
								</p>
								<p className='technology-btn' onClick={selectNewTechnology}>
									Next technology {'->'}
								</p>
							</div>
							<div className='technology-item-inner-right'>
								<img src={selectedTechnology.icon} alt='' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Technology

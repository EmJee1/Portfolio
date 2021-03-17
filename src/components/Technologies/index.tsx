import { MutableRefObject } from 'react'
import './style.scss'

interface technologiesProps {
	technologiesRef: MutableRefObject<any>
}

const Technologies = ({ technologiesRef }: technologiesProps) => {
	return (
		<div className='technologies' ref={technologiesRef}>
			<div className='container'>
				<h2>Technologies</h2>
			</div>
		</div>
	)
}

export default Technologies

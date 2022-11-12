import React from 'react'
import { Art } from '../../types'
import ArtItem from '../ArtItem'

interface ArtsProps {
  arts: Art[]
}

const Arts = (props: ArtsProps) => {
	return <>
		<h1>Art Rater</h1>

		{props.arts.map(({ id, disabled }) => <ArtItem key={id} {...{ id, disabled }} />)}
	</>
}

export default Arts

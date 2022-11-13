import { actions } from '../../store/artStore'
import React from 'react'

interface RemoveArtItemProps {
  id: number
}

export default function RemoveArtItem({ id }: RemoveArtItemProps) {

	const handleRemoveClick = () => {
		actions.removeArt(id)
	}

	return <button onClick={handleRemoveClick}>Remove</button>
}
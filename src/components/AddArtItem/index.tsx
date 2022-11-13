import { actions } from '../../store/artStore'
import React, { useState } from 'react'

export default function AddArtItem() {
	const [artId, setArtId] = useState<number | undefined>()

	const handleAddClick = () => {
		artId !== undefined && actions.addArt(artId)
	}

	const handleArtIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setArtId(+event.target.value)
	}

	return <>
		<input type="number" placeholder='Enter Art Id' onChange={handleArtIdChange} />
		<button onClick={handleAddClick}>Add</button>
	</>
}


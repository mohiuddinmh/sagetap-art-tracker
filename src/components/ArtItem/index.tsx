import React, { useState } from 'react'
import { api } from '../../api'
import { getImageUrl } from '../../utils'
import Rater from '../Rater'
import { useQuery } from 'react-query'
import { Artwork } from '../../types'
import RemoveArtItem from '../RemoveArtItem'
import { Card, CardContent, CardMedia } from '@mui/material'

interface ArtProps {
  id: number
  disabled: boolean
}

export default function ArtItem({ id, disabled }: ArtProps) {

	const [voted, setVoted] = useState<boolean>(false)
	const [rating, setRating] = useState<number | null>(null)

	const {
		data: artwork,
		isLoading,
		isError,
		error
	} = useQuery<Artwork, Error>(['artwork', id], () => api.artwork.get(id))


	if (disabled) {
		return <></>
	}

	if (isLoading) {
		return <>Loading...</>
	}

	if (isError) {
		return <>{error?.message}</>
	}

	return (
		<Card sx={{ maxWidth: '100%' }}>
			{artwork && <>
				<CardMedia
					component="img"
					image={getImageUrl(artwork.data?.image_id)}
					alt={artwork.data?.thumbnail.alt_text}
				/>
        
				<CardContent>
					<h2>{artwork.data.title}</h2>
					<h3>{artwork.data?.artist_title}</h3>
					<p data-testid='rating'>Rating: {rating}</p>
					<RemoveArtItem id={id} />
					<Rater {...{ rating, voted, id: artwork.data?.id, setRating, setVoted }} />
				</CardContent>
      
			</>}
		</Card>
	)
}
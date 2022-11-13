import React, { Dispatch, SetStateAction } from 'react'
import { useMutation } from 'react-query'
import { api } from '../../api'

interface RaterProps {
  setRating: Dispatch<SetStateAction<number | undefined>>
  setVoted: Dispatch<SetStateAction<boolean>>
  id: number
  rating: number | undefined
}

export default function Rater({ id, rating, setRating, setVoted }: RaterProps) {

	const { mutate: mutateRating } = useMutation(api.rating.post)

	const handleRatingClick = (rating: number) => {
		setRating(rating)
	}

	const handleSubmit = () => {
		console.log('Submitting!')
		mutateRating({ id, rating: rating as number })
		setVoted(true)
	}

	return <>
		{[1, 2, 3, 4, 5].map(selectedRating => <button key={selectedRating}
			onClick={() => handleRatingClick(selectedRating)}
		>{selectedRating}</button>)}

		<button onClick={handleSubmit}>Submit</button>
	</>
}

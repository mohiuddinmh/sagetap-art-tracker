import React, { Dispatch, SetStateAction } from 'react'
import { useMutation } from 'react-query'
import { postRating } from '../../api'

interface RaterProps {
  setRating: Dispatch<SetStateAction<number | undefined>>
  setVoted: Dispatch<SetStateAction<boolean>>
  id: number
  rating: number | undefined
}

const Rater = ({ id, rating, setRating, setVoted }: RaterProps) => {

	const { mutate: mutateRating } = useMutation(postRating)

	const handleRatingClick = (rating: number) => {
		setRating(rating)
	}

	const handleSubmit = () => {
		console.log('Submitting!')
		mutateRating({ id, rating: rating as number })
		setVoted(true)
		/*
    Please have the submit button POST to https://20e2q.mocklab.io/rating with the following payload:

      {
        "id": {#id},
        "rating": {#rating}
      }

    Where id is the artwork's id, and rating is the selected rating.

    The endpoint should return the following:

    {
      "message": "Success"
    }
  */
	}
	return <>
		{[1, 2, 3, 4, 5].map(selectedRating => <button key={selectedRating}
			onClick={() => handleRatingClick(selectedRating)}
		>{selectedRating}</button>)}

		<button onClick={handleSubmit}>Submit</button>
	</>
}

export default Rater
import React, { Dispatch, SetStateAction } from "react";

interface RaterProps{
  setRating:  Dispatch<SetStateAction<number | undefined>>
  setVoted:  Dispatch<SetStateAction<boolean>>
}

const Rater = (props: RaterProps) => {

  const handleRatingClick = (rating: number) => {
    props.setRating(rating)
  }

  const handleSubmit = () => {
    console.log("Submitting!")
    props.setVoted(true);
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
    {[1, 2, 3, 4, 5].map(rating => <button key={rating} onClick={() => handleRatingClick(rating)}>{rating}</button>)}

    <button onClick={handleSubmit}>Submit</button>
  </>
}

export default Rater
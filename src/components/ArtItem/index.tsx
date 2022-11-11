import React, { useEffect, useState } from "react"
import { getArtwork } from "../../api";
import { getImageUrl } from "../../utils";

interface ArtProps {
  id: number
  disabled: boolean
}

interface Artwork {
  data: {
    title: string
    artist_title: string
    image_id: string
  }
}

const ArtItem = ({id, disabled}: ArtProps) => {
  const [voted, setVoted] = useState<boolean>(false)
  const [artwork, setArtwork] = useState<Artwork | null>(null)

  const [rating, setRating] = useState<number>()
  useEffect(() => {
    getArtwork(id)
      .then(r => r.json())
      .then(json => setArtwork(json))
  }, [id])


  const submit = () => {
    console.log("Submitting!")
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

  if (disabled) {
    return <></>
  }


  return (
    <div className="item">
      <h2>{artwork?.data.title}</h2>

      <h3>{artwork?.data.artist_title}</h3>

      <img style={{ width: 100 }} src={getImageUrl(artwork?.data.image_id)}/>

      <p>Rating: {rating}</p>

      {artwork && [1, 2, 3, 4, 5].map(rating => <button key={rating} onClick={() => {
        setRating(rating)
        setVoted(true);
      }}>{rating}</button>)}

      <button onClick={submit}>Submit</button>
    </div>
  )
}

export default ArtItem
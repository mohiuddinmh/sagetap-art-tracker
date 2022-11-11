import React, { useEffect, useState } from "react"
import { getArtwork } from "../../api";
import { getImageUrl } from "../../utils";
import Rater from "../Rater";

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

const ArtItem = ({ id, disabled }: ArtProps) => {
  const [voted, setVoted] = useState<boolean>(false)
  const [artwork, setArtwork] = useState<Artwork | null>(null)


  const [rating, setRating] = useState<number>()


  useEffect(() => {
    getArtwork(id)
      .then(r => r.json())
      .then(json => setArtwork(json))
  }, [id])


  if (disabled) {
    return <></>
  }


  return (
    <div className="item">
      <h2>{artwork?.data.title}</h2>

      <h3>{artwork?.data.artist_title}</h3>

      <img alt='art image' style={{ width: 100 }} src={getImageUrl(artwork?.data.image_id)}/>

      {artwork && <>
        <p>Rating: {rating}</p>
        {!voted && <Rater {...{ setRating, setVoted }} />}
      </>}
    </div>
  )
}

export default ArtItem
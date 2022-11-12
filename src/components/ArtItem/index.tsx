import React, { useState } from "react"
import { api } from "../../api";
import { getImageUrl } from "../../utils";
import Rater from "../Rater";
import { useQuery } from "react-query";
import { Artwork } from "../../types";

interface ArtProps {
  id: number
  disabled: boolean
}

const ArtItem = ({ id, disabled }: ArtProps) => {
  const [voted, setVoted] = useState<boolean>(false)
  const [rating, setRating] = useState<number | undefined>()

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
    <div className="item">
      {artwork && <>
        <h2>{artwork.data.title}</h2>

        <h3>{artwork.data?.artist_title}</h3>

        <img alt='art image' style={{ width: 100 }} src={getImageUrl(artwork.data?.image_id)} />

        <p>Rating: {rating}</p>

        {!voted && <Rater {...{ rating, id: artwork.data?.id, setRating, setVoted }} />}
      </>}
    </div>
  )
}

export default ArtItem
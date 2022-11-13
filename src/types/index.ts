export interface Art {
  id: number
  disabled: boolean
}

export interface Artwork {
  data: {
    id: number
    title: string
    artist_title: string
    image_id: string
  }
}

export interface RatingRequest {
  id: number
  rating: number | null
}
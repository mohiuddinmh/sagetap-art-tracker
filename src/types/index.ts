export interface Art {
  id: number
  disabled: boolean
}

export interface Artwork {
  data: {
    title: string
    artist_title: string
    image_id: string
  }
}
import React, { useEffect, useState } from "react"
import Art from "../Art";

const Arts = () => {
  const [arts, setArts] = useState<any>([])

  const a = [
    {id: 27992, disabled: false},
    {id: 27998, disabled: false},
    {id: 27999, disabled: false},
    {id: 27997, disabled: true},
    {id: 27993, disabled: false},
  ]

  useEffect(() => {
    const temp = []
    for (let i = 0; i < a.length; i++) {
      temp.push(<Art id={a[i].id} disabled={a[i].disabled} />)
    }
    setArts(temp)
  }, [setArts])

  return <>
    <h1>Art Rater</h1>
    {arts}
  </>
}

export default Arts
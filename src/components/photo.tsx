import React from 'react'
import { Photo } from '../../models/photo'
import Image from 'next/image'

function Photo({props} : {props:Photo}) {
  return (
    <div data-testid="photo" className="max-w-xs p-4 m-5 min-w-0 border-2 border-x-zinc-900">
  <Image
    width="400"
    alt={props.img_src}
    height="400"
    className="object-cover aspect-[4/3] object-center"
    src={props.img_src}
  />

  <div className="flex m-4 items-center justify-items-end flex-col">
    <h4 className="p-2">{props.rover.name}</h4>
    <h5>{props.camera.name}</h5>
    <p className="p-2">{props.earth_date}</p>
  </div>
</div>
  )
}

export default Photo
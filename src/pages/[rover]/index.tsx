import { useState } from "react";
import { Response } from "../../../models/photo";
import PhotoContainer from "@/components/container";


export async function getStaticProps(context : any) {
 const {params} = context;
 console.log(params.rover)
  const res = await fetch( `https://api.nasa.gov/mars-photos/api/v1/rovers/${params.rover}/photos?page=1&sol=1000&api_key=mn0cL646A86fzVD3vI3MdMpphxncHeUDjNCzgPja`,)
  const photos: Promise<Response> = await res.json()
 
  return {
    props: {
      photos,
    },
  }
}

export async function getStaticPaths(){
  return {
      paths:[
          { params:{ rover: 'Curiosity' }  },
          { params:{ rover: 'Spirit' }  },
          { params:{ rover: 'Opportunity' }  }
      ],
      fallback:false
  }
}

function Rover({photos}: {photos: Response}) {
  const [as,setAs] = useState('')
  console.log(photos)
  return <div>
   <PhotoContainer photos={photos.photos}  />
  </div>;
}

export default Rover;

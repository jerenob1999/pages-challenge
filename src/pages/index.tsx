import { Response } from '../../models/photo'
import PhotoContainer from '@/components/container'


export async function getStaticProps() {

  const res = await fetch( `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?page=1&api_key=mn0cL646A86fzVD3vI3MdMpphxncHeUDjNCzgPja&earth_date=2023-08-10`,)
  const photos: Promise<Response> = await res.json()
 
  return {
    props: {
      photos,
    },
  }
}

export default function Home({photos} : {photos: Response}) {
  return (
    <main>
      <PhotoContainer  photos={photos.photos} />
    </main>
  )
}


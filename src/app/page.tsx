import Image from 'next/image'
import { Skeleton } from "@/components/ui/skeleton"
import { resolve } from 'path'

type Game = {
  id: number
  background_image: string
  rating: number
  name: string
}

const getGames = async (): Promise<Game[]> => {
  const res = await fetch(`https://api.rawg.io/api/games?key=${process.env.RAWG}`)
  if (!res.ok) {
    throw new Error("falild to load data")
  }

  await new Promise((resolve => setTimeout(resolve,2000)))
  const data = await res.json();
  // console.log(data);
  return data.results;


}
export default async function Home() {

  const games = await getGames();
  // console.log(games);
  return (
    <main className="m-24 rounded-md grid grid-cols-4 gap-12">

      { games && games.map((game) => (
        <div className=" bg-white p-8 xl:col-span-2 md:col-span-2 " key={game.id}>
          <h1 >{game.name}</h1>
          <p className='font-bold text-sm mb-4'>{game.rating}</p>
          <div className='aspect-video relative'>
            <Image src={game.background_image} alt={game.name} fill className='object-cover rounded-md' />
          </div>
        </div>
      ))}



    </main>
  )
}

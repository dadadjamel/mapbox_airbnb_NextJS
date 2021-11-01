import { format } from "date-fns"
import { useRouter } from "next/dist/client/router"
import Header from "../components/Header"
import Infocard from "../components/Infocard"
import Map from "../components/Map"
import placesRes from '../res.json'

const Search = () => {
    const router = useRouter()
    // const {location , startDate , endDate} = router.query

    // const formatedStartDate = format(new Date(startDate),"dd MMMM yy")
    console.log(placesRes);
    return (
        <div className='h-screen' >
            <Header/>

            <main className='flex' >
                <section className='flex-grow' >
                    <p>300+ stays for 5 numbers of guests</p>
                    <h1>Stays in  -  </h1>
                    <div>
                        <button className='button' >cancel</button>
                    </div>

                    {placesRes.map(place=>(
                        <Infocard key={place.title} place={place} />
                    ))}
                </section>
                <section className='min-w-[600px]' >
                    <Map/>
                </section>
            </main>
        </div>
    )
}

export default Search

import Image from 'next/image'
import { SearchIcon, GlobeAltIcon, MenuIcon, UserIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';

const Header = () => {
    const [searchInput, setSearchInput] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [numOfGuests, setNumOfGuests] = useState(0)
    const router = useRouter()

    const handleSelect = (ranges) => {
        console.log(ranges);
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }

    const handleSearch = () => {
        router.push({
            pathname : '/search',
            query : {
                // location : searchInput,
                // startDate : startDate.toISOString(),
                // endDate : endDate.toISOString(),
            }
        })
    }
    return (
        <div className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10' >
            <div onClick={()=> router.push('/')} className='relative flex items-center h-10 cursor-pointer my-auto' >
                <Image
                    src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png'
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left' />
            </div>

            <div className='flex items-center md:border-2 rounded-full justify-between py-2 md:shadow-lg'>
                <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} type='text' placeholder='Start your search' className='outline-none px-2 mx-2 flex-grow bg-transparent text-gray-600 placeholder-gray-400' />
                <SearchIcon className='hidden md:inline-flex h-8 rounded-full bg-red-400 text-white p-2 mx-2 cursor-pointer' />
            </div>

            <div className='hidden md:inline-flex items-center justify-end'>

                <div className='flex items-center mx-5' >
                    <p>Become a host</p>
                    <GlobeAltIcon className='text-gray-500 h-8' />
                </div>

                <div className='flex items-center border-4 rounded-full px-3 mx-5' >
                    <MenuIcon className='text-gray-500 h-8 mr-2' />
                    <UserIcon className='text-gray-500 h-8 ml-2' />
                </div>

            </div>

            {searchInput &&
                <div className='felx flex-col col-span-3 mx-auto' >
                    <DateRangePicker
                        ranges={[selectionRange]}
                        rangeColors={['#FD5B61']}
                        minDate={new Date()}
                        onChange={handleSelect}
                    />

                    <div className='flex justify-between items-center' >
                        <h2 className='text-2xl flex-grow font-semibold' >Number of guests :</h2>

                        <UserIcon className='h-5' />
                        <input value={numOfGuests} onChange={(e)=>setNumOfGuests(e.target.value)} type='number' className='w-12 text-lg outline-none pl-2 text-red-500' />
                    </div>
                    <div className='flex justify-around items-center' >
                        <button onClick={()=>setSearchInput('')} >Cancel</button>
                        <button onClick={handleSearch} className='text-red-700' >Search</button>
                    </div>
                </div>

            }

        </div>
    )
}

export default Header

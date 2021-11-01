import Image from "next/image"

const Banner = () => {
    return (
        <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
            <Image
                src='https://wallpapercave.com/wp/wp1846068.jpg'
                objectFit='cover'
                layout='fill'
            />
            <div className='absolute top-1/2 w-full text-center text-white text text-4xl' >
                <p>Welcome to our hotel</p>
                <button className='bg-white text-lg text-purple-500 px-10 py-4 my-5 shadow-md rounded-full font-bold hover:shadow-xl
                active:scale-90 duration-150' >Click here to start</button>
            </div>
        </div>
    )
}

export default Banner

import React from 'react'

function Home() {
  return (
    <>
        <div className=' flex justify-between items-center px-10  h-[95vh] w-screen'>
            <div className='flex justify-center items-center flex-col border-solid border-8 translate-x-4 skew-y-3 border-orange-500 h-[300px] w-[300px]'>
                <h1 className='text-gray-500 text-5xl leading-7 mb-6'>Spread </h1>
                <h1 className='text-gray-500 text-5xl leading-7 mb-6'>love </h1>
                <h1 className='text-gray-500 text-5xl leading-7 mb-6'>everywhere</h1>
                <h1 className='text-gray-500 text-5xl leading-7 mb-6'> you go.</h1>
            </div>
            <div>
            <div className='flex mr-20 justify-center gap-4 items-center flex-col border-solid border-8 border-orange-500 h-[300px] w-[300px]'>
            <button className='bg-orange-500 py-4 px-12 rounded-md  text-white hover:bg-white hover:border-solid hover:border-2 hover:border-orange-500 hover:text-gray-500 ease-in-out duration-300'>LogIn</button>
            <button className='bg-orange-500 py-4 px-12 rounded-md  text-white hover:bg-white hover:border-solid hover:border-2 hover:border-orange-500 hover:text-gray-500 ease-in-out duration-300'>SignUp</button>
            </div>
                
            </div>
        </div>
    </>
  )
}

export default Home
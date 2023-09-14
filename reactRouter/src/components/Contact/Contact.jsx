import React from 'react'

function Contact() {
  return (
    <>
    <div className='w-screen h-[92vh] flex justify-center items-center'>
        <div className='rounded-lg gap-4 w-[70vw] h-[80vh] flex justify-center items-center '>
            <div className='border-solid border-4 w-[32vw] h-[60vh] overflow-hidden '>
                <img src='https://images.pexels.com/photos/18184113/pexels-photo-18184113/free-photo-of-man-posing-with-llama.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
                className='text-lg object-cover' />
            </div>
            <div className='w-[32vw] h-[60vh] flex flex-col gap-2'>
                <label className='text-lg font-medium'>Full Name</label>
                <input  type='text' placeholder='Ex. John Doe'
                 className='w-full h-12 border-solid border-2 border-orange-500 outline-none text-ls font-medium'/>
                <label className='text-lg font-medium'>Email ID</label>
                <input  type='email' placeholder='Ex. john@gmail.com'
                className='w-full h-12 border-solid border-2 border-orange-500 outline-none text-ls font-medium'/>
                <label className='text-lg font-medium'>Mobile No</label>
                <input  type='number' placeholder='Ex. +9186586325'
                className='w-full h-12 border-solid border-2 border-orange-500 outline-none text-ls font-medium'/>
                <button className='w-full h-12 bg-orange-500 text-white outline-none text-ls font-medium'>Send Message</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact
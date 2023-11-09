import React from 'react'
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <>
    <div className='flex w-full bg-gray-200 px-5 items-center h-64 justify-evenly'>
    <div className='flex gap-1'>
                <h1 className='text-white text-5xl font-extrabold'>JustStartwith</h1><h1 className='text-orange-500 text-3xl font-bold'>React</h1>
            </div>
    <div>
        
    </div>
    <ul className='flex flex-col gap-4 text-md font-md text-gray-500'>
                    <li className='font-bold'> Pages </li>
                    <li className='hover:text-orange-500 cursor-pointer'><Link to="/">Home</Link></li>
                    <li className='hover:text-orange-500 cursor-pointer'><Link to="about">About</Link></li>
                    <li className='hover:text-orange-500 cursor-pointer'><Link to="contact-us">Contact Us</Link></li>
                    <li className='hover:text-orange-500 cursor-pointer'><Link to="github">Github</Link></li>
                </ul>
    <div>
    <ul className='flex flex-col gap-4 text-md font-md text-gray-500'>
                    <li className='font-bold'>Help</li>
                    <li className='hover:text-orange-500 cursor-pointer'>FAQ</li>
                    <li className='hover:text-orange-500 cursor-pointer'>Customer Care</li>
                    <li className='hover:text-orange-500 cursor-pointer'>Complaint</li>
                    <li className='hover:text-orange-500 cursor-pointer'>Address</li>
                </ul>
    </div>
    </div>
    </>
  )
}

export default Footer
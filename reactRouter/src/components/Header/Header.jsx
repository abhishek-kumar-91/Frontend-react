import React from 'react'
import {Link, NavLink} from 'react-router-dom'
function Header() {
  return (
    <>
        <div className='flex w-full h-16 bg-gray-200 justify-between px-5 items-center'>
            <div className='flex gap-1'>
             <Link to="/"><h1 className='text-white text-xl cursor-pointer font-extrabold'>JustStartWith</h1><h1 className='text-orange-500 font-bold'>React</h1></Link>   
            </div>

            <div>
                <ul className='flex gap-8 text-lg font-md text-gray-500'>
                  <li>
                    <NavLink to="/" className={({isActive})=>`${isActive ? "text-orange-500" : "text-gray-500"} hover:text-orange-500 cursor-pointer`}>
                    Home 
                    </NavLink>
                    </li> 
                    <li>
                    <NavLink to="about" className={({isActive})=>`${isActive ? "text-orange-500" : "text-gray-500"} hover:text-orange-500 cursor-pointer`}>
                    About 
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="contact-us" className={({isActive})=>`${isActive ? "text-orange-500" : "text-gray-500"} hover:text-orange-500 cursor-pointer`}>
                    Contact US 
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="github" className={({isActive})=>`${isActive ? "text-orange-500" : "text-gray-500"} hover:text-orange-500 cursor-pointer`}>
                   Github 
                    </NavLink>
                    </li>
                </ul>
            </div>

            <div className='flex gap-3'>
                <button className='hover:text-orange-500 ease-in-out duration-300 cursor-pointer text-gray-500 font-semibold text-xl'>LogIn</button>
                <button className='bg-orange-500 p-2 rounded-md  text-white hover:bg-white hover:border-solid hover:border-2 hover:border-orange-500 hover:text-gray-500 ease-in-out duration-300'>SignUp</button>
            </div>
        </div>
    </>
  )
}

export default Header
import React from 'react'

function Header() {
  return (
    <>
    <nav className='w-full h-12 bg-teal-800 flex justify-between px-4 items-center'>
      <div className='text-white font-extrabold text-lg cursor-pointer'>React</div>
      <ul className='flex text-white space-x-4 cursor-pointer'>
        <li className='hover:text-slate-900'>Home</li>
        <li className='hover:text-slate-900'>Docs</li>
        <li className='hover:text-slate-900'>About US</li>
      </ul>
      <div className='p-1 bg-teal-600 rounded-md '>
        <button className='text-white' >LogIN/SignUP</button>
      </div>
     </nav>
     </>
  )
}

export default Header
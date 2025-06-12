import React from 'react'
import { NavLink } from 'react-router-dom'
import { MoveLeft } from 'lucide-react'

function OauthHeader() {
  return (
    <div className='w-full pb-0.5 fixed z-50 bg-[linear-gradient(90deg,_#00E0FF,_transparent,_#B072FF)]'>
      <div className='w-full flex items-center justify-between py-3 px-4 sm:px-8 md:px-[6%] bg-[#000204]'>

        <NavLink
          to='/'
          className='text-2xl md:text-3xl font-black font-orbitron'
        >
          ARIES
        </NavLink>

        <NavLink
          to='/'
          className='flex items-center gap-2 font-orbitron font-bold text-cyan-100 transition-all duration-300 ease-in-out hover:text-cyan-400'
        >
          <MoveLeft strokeWidth={3} className='text-cyan-400' />
          Back to Home
        </NavLink>
      </div>
    </div>
  )
}

export default OauthHeader
"use client"

import { Github, Mail } from "lucide-react"
import Link from "next/link"

function Footer() {
  return (
    <div className='mt-8' >
      <div className='text-center flex items-center justify-center flex-col' >

        <p className='text-lg sm:text-xl font-semibold flex items-center gap-1.5 font-orbitron' >
          Developed by
          <a
            href='https://akshat-nine.vercel.app'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-gradient-to-r from-[#00E0FF] to-[#B072FF] bg-clip-text text-transparent font-black'
          >
            Akshat Garg
          </a>
        </p>

        <a
          href="mailto:workofakshat@gmail.com"
          target='_blank'
          className='w-max flex items-center gap-2 mx-auto text-cyan-100 text-sm'
        >
          <Mail className='w-5' />
          workofakshat@gmail.com
        </a>
      </div>

      <div className='bg-[linear-gradient(90deg,_#00E0FF,_transparent,_#B072FF)] pt-0.5 w-full mt-12' >
        <div className='w-full text-center sm:flex items-center text-cyan-100 justify-between px-4 sm:px-8 md:px-[6%] py-6 bg-[#000204]' >

          <p>
            © 2025
            <span className='font-orbitron font-extrabold text-lg bg-gradient-to-r from-[#00E0FF] to-[#B072FF] bg-clip-text text-transparent ml-1.5' >ARIES</span>
            . All rights reserved.
          </p>

          <div className='flex items-center justify-center gap-8 mt-4 sm:mt-0' >
            <Link
              href='/privacy-and-terms'
              className='text-cyan-100 hover:text-cyan-400 transition-all duration-300 ease-in-out'
            >
              Privacy & Terms
            </Link>
            <a
              href='https://github.com/Akshat7garg/Aries'
              target='_blank'
              rel='noopener noreferrer'
              className='text-purple-200 hover:text-purple-500 transition-all duration-300 ease-in-out'
            >
              <Github strokeWidth={3} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
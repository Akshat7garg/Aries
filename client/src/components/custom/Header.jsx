import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '@/assets/Aries_logo.png'
import UserProfile from '@/oauth_pages/UserProfile';

const headerLinks = [
  { name: 'Home', path: '/' },
  { name: 'Features', path: '/features' },
  { name: 'FAQs', path: '/faqs' },
  { name: 'Support', path: '/support' }
]

function Header() {
  const [user, setUser] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16.5rem)';
    setIsOpen(true);
  }

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16.5rem)';
    setIsOpen(false);
  }

  return (
    <div className='w-full pb-0.5 fixed z-50 bg-[linear-gradient(90deg,_#00E0FF,_transparent,_#B072FF)]' >
      <div className='w-full flex items-center justify-between py-2 lg:py-3 px-4 sm:px-8 md:px-[6%] bg-[#000204]' >

        <NavLink
          to='/'
          className='flex items-center gap-2 text-2xl md:text-3xl font-black font-orbitron'
        >
          <img
            src={logo}
            alt="Aries_logo"
            className='hidden lg:block h-12 drop-shadow-[0px_0px_3px_#B072FF]'
          />
          <span>ARIES</span>
        </NavLink>

        <div className='flex items-center gap-4 lg:gap-8' >
          <div className='hidden lg:flex items-center gap-8 font-orbitron font-medium mr-4' >
            {headerLinks.map((link, index) => {
              return (
                <NavLink
                  key={index}
                  to={link.path}
                  className={({ isActive }) => isActive ?
                    'text-cyan-400' :
                    'hover:text-cyan-400 transition-all duration-300 ease-in-out text-cyan-100'}
                >
                  {link.name}
                </NavLink>
              )
            })}
          </div>

          <button
            className='flex lg:hidden h-12 w-12 items-end justify-center flex-col gap-1 cursor-pointer relative'
            onClick={openMenu}
          >
            <span className='bg-gradient-to-r from-[#00E0FF] to-[#B072FF] h-1 w-[70%] rounded-md' ></span>
            <span className='bg-gradient-to-r from-[#00E0FF] to-[#B072FF] h-1 w-[40%] rounded-md' ></span>
            <span className='bg-gradient-to-r from-[#00E0FF] to-[#B072FF] h-1 w-[70%] rounded-md' ></span>
          </button>

          {
            !user ? (
              <NavLink
                to="/oauth/login"
                className='hidden sm:block py-2 px-8 ml-4 lg:ml-0 rounded-2xl border-2 border-cyan-400 shadow-[inset_0_0_10px_#00E0FF] font-medium hover:border-purple-500 hover:shadow-[inset_0_0_20px_#B072FF] transition-all duration-300 ease-in-out'
              >
                Sign in
              </NavLink>
            ) : (
              <UserProfile />
            )
          }

        </div>

        <div
          className={`h-screen w-screen fixed lg:hidden inset-0 z-5 bg-black/83 backdrop-blur-xs blur-bg 
            ${isOpen ? 'block' : 'hidden'}`}
          onClick={closeMenu}
        ></div>

        <div
          ref={sideMenuRef}
          className='h-screen w-66 pl-0.5 block lg:hidden fixed -right-66 top-0 bottom-0 bg-[linear-gradient(#00E0FF,_transparent,_#B072FF)] transition-all duration-600 ease-in-out z-10'
        >
          <div className="h-full w-full flex items-start justify-start flex-col gap-4 py-4 pl-10 pr-4 sm:pr-8 bg-gradient-image" >

            <div className='flex items-center justify-end w-full mb-4' >
              <button
                className='h-12 w-12 relative flex items-center justify-center flex-col gap-1 cursor-pointer'
                onClick={closeMenu}
              >
                <span className='absolute bg-gradient-to-r from-[#00E0FF] to-[#B072FF] h-1 w-[70%] rounded-md rotate-45' ></span>
                <span className='absolute bg-gradient-to-r from-[#00E0FF] to-[#B072FF] h-1 w-[70%] rounded-md -rotate-45' ></span>
              </button>
            </div>

            {headerLinks.map((link, index) => {
              return (
                <NavLink
                  key={index}
                  to={link.path}
                  onClick={closeMenu}
                  className='text-cyan-100'
                >
                  {link.name}
                </NavLink>
              )
            })}

            <div className='w-full mt-8 flex items-center justify-center' >
              <NavLink
                to="/oauth/login"
                className={`py-2 px-8 rounded-2xl border-2 border-cyan-400 shadow-[inset_0_0_10px_#00E0FF] font-medium 
                  ${user ? 'hidden' : 'block sm:hidden'}`}
              >
                Sign in
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
import React from 'react'
import { NavLink } from 'react-router-dom'

interface Props {
    children?: React.ReactNode
  }

export default function MainLayout({ children }: Props) {
  return (
    <div>
      <header>
        <nav  className=' bg-[#222222] h-[65px]'>
          <ul className='w-[1200px] mx-auto flex justify-between h-[65px] items-center text-white'>
            <li>
              <NavLink to='/' className={({isActive}) => { return isActive ? 'text-red-300 font-bold' : ''}}>
                <span className='font-bold'>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/category' className={({isActive}) => { return isActive ? 'text-red-300 font-bold' : ''}}>
                <span className='font-bold'>Category</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/menu' className={({isActive}) => { return isActive ? 'text-red-300 font-bold' : ''}}>
                <span className='font-bold'>Menu</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/about' className={({isActive}) => { return isActive ? 'text-red-300 font-bold' : ''}}>
                <span className='font-bold'>About</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/login' className={({isActive}) => { return isActive ? 'text-red-300 font-bold' : ''}}>
                <span className='font-bold'>Login</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/register' className={({isActive}) => { return isActive ? 'text-red-300 font-bold' : ''}}>
                <span className='font-bold'>Register</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/cart' className={({isActive}) => { return isActive ? 'text-red-300 font-bold' : ''}}>
                <span className='font-bold'>Cart</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}
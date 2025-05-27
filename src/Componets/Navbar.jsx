import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='flex flex-row gap-5'>
      <NavLink to='/'>
        Home
      </NavLink>
      <NavLink to="/pasteList">
        Paste List
      </NavLink>
    </div>
  )
}

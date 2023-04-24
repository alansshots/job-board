import React from 'react'
import {Link, NavLink } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="mx-auto flex max-w-4xl items-center justify-between p-4">

        <Link to='/' className='className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100"'>
           <img src='' alt="logo" className='w-24 sm:w-36'/>
        </Link>

     <ul className="flex items-center gap-2 text-medium font-bold text-gray-800 uppercase">
        <NavLink to="/" className={({ isActive }) => isActive ? 'm-4 border-b-2 border-yellow-500' : 'm-4'}>Обяви</NavLink>

        <NavLink  to="/blog" className={({ isActive }) => isActive ? 'm-4 border-b-2 border-yellow-500' : 'm-4'}>Блог</NavLink>
        <NavLink to="/register">
        <button className="flex items-center px-4 py-1  transition ease-in duration-200 uppercase text-sm rounded-full bg-gray-800 hover:bg-white text-white hover:text-gray-800 border-2 border-gray-900 focus:outline-none">          
            Регистрация
        </button>
        </NavLink>

        <NavLink to="/login">
        <button className="flex items-center px-4 py-1  transition ease-in duration-200 uppercase text-sm rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">          
            Вход
        </button>
        </NavLink>

    </ul>
</nav>

  )
}

export default Navbar
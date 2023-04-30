import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

  return (
 <>
  <div className='bg-white shadow-xl'>
    <div id='Navbar' className='bg-white m-auto max-w-6xl flex flex-row items-center justify-between'>
        {/* Logo */}
        <div className='bg-[#b3fd49] py-4 px-8'>
            <Link to='/'>
             <h2>LR</h2>
            </Link>
        </div>

        <div>
            <div className='flex flex-row justify-around items-center '>
                <NavLink to="/offers" className={({ isActive }) => isActive ? 'm-4 border-b-2 border-[#b3fd49] font-semibold mx-4' : 'mx-4 font-semibold duration-100 hover:scale-105'}>Обяви</NavLink>
                <NavLink to="blog" className={({ isActive }) => isActive ? 'm-4 mr-10 border-b-2 border-[#b3fd49] font-semibold mx-4' : 'mx-4 mr-10 font-semibold duration-100 hover:scale-105'}>Блог</NavLink>
                <NavLink to="/register" className='mx-1'>
                    <button className="bg-black text-white py-2 px-4 rounded-2xl duration-100 hover:scale-105">          
                            Регистрация
                    </button>
                </NavLink>
                <NavLink to="/login" className='mx-1'>
                    <button className="bg-black text-white py-2 px-4 rounded-2xl duration-100 hover:scale-105">          
                            Вход
                    </button>
                </NavLink>
            </div>
        </div>

    </div>
    </div>
 </>

  )
}

export default Navbar
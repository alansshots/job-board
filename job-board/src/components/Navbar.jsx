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
                <NavLink to="/offers" className='mx-2 font-semibold'>Обяви</NavLink>
                <NavLink to="blog" className='mx-2 font-semibold'>Блог</NavLink>
                <NavLink className='mx-2 mr-1 font-semibold'>Информация</NavLink>
                <NavLink to="/register" className='mx-1'>
                    <button className="bg-black text-white py-2 px-4 rounded-2xl">          
                            Регистрация
                    </button>
                </NavLink>
                <NavLink to="/login" className='mx-1'>
                    <button className="bg-black text-white py-2 px-4 rounded-2xl">          
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
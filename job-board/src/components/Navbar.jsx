import React from 'react'
import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import supabase from '../config/supabaseClient';
import { Auth } from '@supabase/auth-ui-react';
import Login from '../pages/Login';


const Navbar = ( props ) => {
    const [user, setUser] = useState(props.userData);
    const [dropdown, setDropdown] = useState(false)
    const navigate = useNavigate();

    useEffect(() =>{
        async function getUserData() {
            await supabase.auth.getUser().then((value) => {
                if(value.data?.user) {
                    setUser(value.data.user);
                    console.log(value.data.user);
                }
            })
        }

        getUserData();
    }, [])

    async function signOutUser(){
        await supabase.auth.signOut();
        setUser(null)
        navigate("/")
    }

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
                <NavLink to="/offers" className={({ isActive }) => isActive ? 'm-4 border-b-2 border-[#0146b1] font-semibold mx-4' : 'mx-4 font-semibold duration-100 hover:scale-105'}>Обяви</NavLink>
                <NavLink to="blog" className={({ isActive }) => isActive ? 'm-4 mr-10 border-b-2 border-[#0146b1] font-semibold mx-4' : 'mx-4 mr-10 font-semibold duration-100 hover:scale-105'}>Блог</NavLink>

                {(function() {
                    if (user) {
                         return (
                            <>
                            <div className='flex flex-col'  onMouseEnter={() => setDropdown(true)}>
                                <div class="flex-row gap-4 flex justify-center items-center">
                                    <div class="flex-shrink-0">
                                        <a href="#" class="relative block">
                                            <img alt="profil" src="https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png" class="mx-auto object-cover rounded-full h-10 w-10 "/>
                                        </a>
                                    </div>
                                    <div class=" flex flex-col">
                                        <span class="text-lg font-medium">
                                            {user.user_metadata.company_name}
                                        </span>
                                        <span class="text-xs text-gray-700">
                                            {user.email}
                                        </span>
                                    </div>
                                </div>

                                {/* Dropdown */}
                                {dropdown && (
                                <div onMouseLeave={() => setDropdown(false)} id="dropdown" class="z-10 absolute mt-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-46">
                                    <div class="px-4 py-3 text-sm text-gray-900 ">
                                        <div>{user.user_metadata.company_name}</div>
                                        <div class="font-medium truncate">{user.email}</div>
                                    </div>
                                    <ul class="py-2 text-sm text-gray-700 " aria-labelledby="dropdownInformationButton">
                                        <li>
                                            <Link to={"/company/" + user.id} class="block px-4 py-2 hover:bg-gray-100">Профил</Link>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 hover:bg-gray-100">Нещо №1</a>
                                        </li>
                                    </ul>
                                    <div class="py-2">
                                        <a  onClick={() => signOutUser()} class=" cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Изход</a>
                                    </div>
                                </div>
                                )}

                               </div>
                            </>
                         );
                     } else {
                         return (
                            <>
                            <NavLink to="/register" className='mx-1'>
                                <button className="bg-[#0146b1] text-white py-2 px-4 rounded-2xl duration-100 hover:scale-105">          
                                    Регистрация
                                </button>
                            </NavLink>
                            <NavLink to="/login" className='mx-1'>
                                <button className="bg-[#0146b1] text-white py-2 px-4 rounded-2xl duration-100 hover:scale-105">          
                                        Вход
                                </button>
                            </NavLink>
                            </>
                         );
                    }
                })()}

            </div>
        </div>

    </div>
    </div>
 </>

  )
}

export default Navbar
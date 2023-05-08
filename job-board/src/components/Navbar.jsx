import React from 'react'
import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import supabase from '../config/supabaseClient';
import { Auth } from '@supabase/auth-ui-react';


const Navbar = () => {
   
    const [user, setUser] = useState(null);
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
                                <h2 className='mx-2'>Добре дошли отново, {user.email}</h2>
                                <button onClick={() => signOutUser()}>Изход</button>
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
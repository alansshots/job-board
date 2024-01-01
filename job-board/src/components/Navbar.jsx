import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import supabase from '../config/supabaseClient';
import { Auth } from '@supabase/auth-ui-react';
import Login from '../pages/Login';

const Navbar = () => {
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState(null);
  const [dropdown, setDropdown] = useState(false);
  const navigate = useNavigate();
  const jwt = localStorage.getItem('accessToken');

  useEffect(() => {
  async function getUserData() {
    const { data, error } = await supabase.auth.getUser(jwt);
    if (data?.user) {
      setUserId(data.user.id);
    }
  }

  const fetchUser = async () => {
    // Wait for userId to be set
    if (userId) {
      const { data: user, error } = await supabase
        .from('users')
        .select()
        .eq('id', userId);

      if (user) {
        setUser(user[0]);
      }
    }
  };

  if (jwt) {
    // First, get user data from auth
    getUserData();
    
    // Then, fetch user data from the database
    fetchUser(); 
  }
}, [jwt, userId]);  // Added userId as a dependency

  async function signOutUser() {
    await supabase.auth.signOut();
    setUser(null);
    localStorage.setItem('accessToken', null);
    navigate('/');
    window.location.reload();
  }

  return (
    <div className='bg-white shadow-xl'>
      <div id='Navbar' className='bg-white m-auto max-w-6xl flex sm:flex-row items-center justify-between flex-row-reverse'>
        {/* Logo */}
        <div className=''>
          <Link to='/'>
            <img src="./src/assets/logo.png" className='w-60 my-0.5' alt="logo" />
          </Link>
        </div>

        <div>
          <div className='flex sm:flex-row justify-around items-center flex-row-reverse '>
            <NavLink to='/offers' className={({ isActive }) => isActive ? 'mx-4 border-b-2 border-[#0146b1] font-semibold mx-4' : 'mx-4 font-semibold duration-100 hover:scale-105'}>Обяви</NavLink>
            <NavLink to='blog' className={({ isActive }) => isActive ? 'mx-4 mr-10 border-b-2 border-[#0146b1] font-semibold mx-4' : 'hidden md:block mx-4 mr-10 font-semibold duration-100 hover:scale-105'}>Блог</NavLink>

            {jwt && user && (
              <div className='flex flex-col' onMouseEnter={() => setDropdown(true)}>
                <div className='flex-row gap-4 flex justify-center items-center'>
                  <div className='flex-shrink-0'>
                    <a className='relative block'>
                      <img alt='profil'
                       src={user.profile_image_url || 'https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png'}
                       className='mx-auto object-cover rounded-full h-10 w-10' />
                    </a>
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-lg hidden sm:block font-medium'>{user.company_name}</span>
                    <span className='text-xs hidden sm:block text-gray-700'>{user.email}</span>
                  </div>
                </div>

                {/* Dropdown */}
                {dropdown && (
                  <div onMouseLeave={() => setDropdown(false)} id='dropdown' className='z-10 absolute mt-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-46'>
                    <div className='px-4 py-3 text-sm text-gray-900'>
                      <div>{user.company_name}</div>
                      <div className='font-medium truncate'>{user.email}</div>
                    </div>
                    <ul className='py-2 text-sm text-gray-700' aria-labelledby='dropdownInformationButton'>
                      <li>
                        <Link to={'/company/' + user.id} className='block px-4 py-2 hover:bg-gray-100'>
                          Профил
                        </Link>
                      </li>
                      <li>
                        <Link to={'company/' + user.id + '/addOffer'} className='block px-4 py-2 hover:bg-gray-100'>
                          Създай Обява
                        </Link>
                      </li>
                    </ul>
                    <div className='py-2'>
                      <a onClick={() => signOutUser()} className='cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>
                        Изход
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )}

            {!jwt || !user ? (
              <>
                <NavLink to='/register' className='mx-1'>
                  <button className='bg-[#0146b1] text-white py-2 px-4 rounded-2xl duration-100 hover:scale-105'>
                    Регистрация
                  </button>
                </NavLink>
                <NavLink to='/login' className='mx-1'>
                  <button className='bg-[#0146b1] text-white py-2 px-4 rounded-2xl duration-100 hover:scale-105'>
                    Вход
                  </button>
                </NavLink>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;


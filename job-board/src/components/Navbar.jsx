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
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleMenuClick = () => {
      setMobileMenu(value => !value);
  }

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
    <div className='bg-white shadow-xl py-1 px-4'>

      <div className='hidden md:block py-1'>
        <div id='Navbar' className='bg-white m-auto max-w-6xl flex sm:flex-row items-center justify-between flex-row-reverse'>
        {/* Logo */}
        <div className=''>
          <Link to='/' className='bg-[#0146b1] text-white text-sm sm:text-lg mr-0.5 py-2 px-2 sm:px-4 font-bold rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm'>
            {/* <img src="./src/assets/logo.png" className='w-60 my-0.5' alt="logo" /> */}
            Stazhant.com
          </Link>
        </div>

        <div>
          <div className='flex sm:flex-row justify-around items-center flex-row-reverse '>
            <NavLink to='/offers' className={({ isActive }) => isActive ? 'mx-4 border-b-2 border-[#0146b1] font-semibold mx-4' : 'mx-4 font-semibold duration-100 hover:scale-105'}>Обяви</NavLink>
            {/* <NavLink to='/seaching' className={({ isActive }) => isActive ? 'mx-4 border-b-2 border-[#0146b1] font-semibold mx-4' : 'mx-4 font-semibold duration-100 hover:scale-105'}>Търсещи</NavLink> */}
            <NavLink to='blog' className={({ isActive }) => isActive ? 'mx-4 mr-10 border-b-2 border-[#0146b1] font-semibold mx-4' : 'hidden md:block mx-4 mr-10 font-semibold duration-100 hover:scale-105'}>Блог</NavLink>

            {jwt && user && (
              <div className='flex flex-col' onMouseEnter={() => setDropdown(true)}>
                <div className='flex-row gap-4 flex justify-center items-center'>
                  <div className='flex-shrink-0'>
                    <a className='relative block'>
                      <img alt='profil'
                       src={user.profile_image_url || 'https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png'}
                       className='mx-auto object-cover rounded-full h-12 w-12 border-2 border-black' />
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
                  <button className='bg-[#0146b1] text-white py-1 sm:py-2 px-2 sm:px-4 rounded-2xl duration-100 hover:scale-105'>
                    Регистрация
                  </button>
                </NavLink>
                <NavLink to='/login' className='mx-1'>
                  <button className='bg-[#0146b1] text-white py-1 sm:py-2 px-2 sm:px-4 rounded-2xl duration-100 hover:scale-105'>
                    Вход
                  </button>
                </NavLink>
              </>
            ) : null}
          </div>
        </div>
        </div>
      </div>

      {/* Mobile Navbar  */}
      <nav class="md:hidden border-gray-200 ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <div href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
              <Link to='/' className='bg-[#0146b1] text-white text-sm sm:text-lg mr-0.5 py-2 px-2 sm:px-4 font-bold rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm'>
              {/* <img src="./src/assets/logo.png" className='w-60 my-0.5' alt="logo" /> */}
                Stazhant.com
              </Link>
          </div>

          <div className='flex flex-row items-center justify-center'>
          {jwt && user && (
              <div className='flex flex-col mr-2'>
                <div className='flex-row gap-4 flex justify-center items-center'>
                  <div className='flex-shrink-0'>
                    <Link to={'/company/' + user.id} className='relative block'>
                      <img alt='profil'
                       src={user.profile_image_url || 'https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png'}
                       className='mx-auto object-cover rounded-full h-12 w-12 border-2 border-black ' />
                    </Link>
                  </div>
                  <div className='flex flex-col'>
                    <span className='text-lg hidden sm:block font-medium'>{user.company_name}</span>
                    <span className='text-xs hidden sm:block text-gray-700'>{user.email}</span>
                  </div>
                </div>
              </div>
            )}

            <button onClick={handleMenuClick} data-collapse-toggle="navbar-hamburger" type="button" class="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
              <span class="sr-only"></span>
              <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>

          {mobileMenu === true && (
          <div class="w-full" id="navbar-hamburger">
            <ul class="flex flex-col font-medium mt-4 rounded-lg">
              <li>
                <NavLink to='/offers' onClick={handleMenuClick} className={({ isActive }) => isActive ? 'block py-2 px-3 text-white bg-[#0146b1] rounded' : 'block py-2 px-3 bg-white rounded'}>Обяви</NavLink>
              </li>
              <li>
                <NavLink to='blog' onClick={handleMenuClick} className={({ isActive }) => isActive ? 'block py-2 px-3 text-white bg-[#0146b1] rounded' : 'block py-2 px-3 bg-white rounded'}>Блог</NavLink>
              </li>
              {jwt && user && (
                <>
                  <li>
                    <NavLink to={'company/' + user.id + '/addOffer'} onClick={handleMenuClick} className={({ isActive }) => isActive ? 'block py-2 px-3 text-white bg-[#0146b1] rounded' : 'block py-2 px-3 bg-white rounded'}>
                      Създай Обява
                    </NavLink>
                  </li>
                  <li>
                    <a onClick={() => signOutUser()} className='cursor-pointer block px-3 py-2 hover:bg-gray-100'>
                      Изход
                    </a>
                  </li>
                </>
              )}
              {!jwt || !user ? (
              <>
                <NavLink onClick={handleMenuClick}  to='/register' className='mx-1 my-1'>
                  <button className='bg-[#0146b1] text-white py-1 sm:py-2 px-2 sm:px-4 rounded-2xl duration-100 hover:scale-105'>
                    Бизнес Регистрация  
                  </button>
                </NavLink>
                <NavLink onClick={handleMenuClick} to='/login' className='mx-1 mt-1'>
                  <button className='bg-[#0146b1] text-white py-1 sm:py-2 px-2 sm:px-4 rounded-2xl duration-100 hover:scale-105'>
                    Бизнес Вход
                  </button>
                </NavLink>
              </>
            ) : null}
            </ul>
          </div>
          )}
        </div>
      </nav>

    </div>
  );
}

export default Navbar;


import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'

import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import supabase from '../config/supabaseClient'

const Login = () => {
  const navigate = useNavigate();

  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
    navigate('/company/:slug');
    setUser()
  }

  return (
    <>
    <div id="Login">
      <section className='max-w-4xl m-auto'>
          <div className="mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
              <div className="rounded-lg border-gray-800 border-2 bg-white p-8 shadow-xl lg:col-span-6 lg:p-12">
                <form action="" className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="" for="email">Имейл</label>
                      <input
                        className="w-full rounded-lg border-gray-800 border-2 p-3 text-sm"
                        placeholder="Имейл"
                        type="email"
                        id="email"
                        value={email} onInput={e => setEmail(e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="" for="password">Парола</label>
                      <input
                        className="w-full rounded-lg border-gray-800 border-2 p-3 text-sm"
                        placeholder="*********"
                        type="password"
                        id="password"
                        value={password} onInput={e => setPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex flex-row">
                      <button type='button' onClick={signInWithEmail} className="flex items-center px-4 py-1  transition ease-in duration-200 uppercase text-sm rounded-full bg-gray-800 hover:bg-white text-white hover:text-gray-800 border-2 border-gray-900 focus:outline-none">          
                         Вход
                      </button>
                      <div className='m-2 flex flex-row justify-center items-center'>
                          <p className='text-sm'>Нямате Профил?</p> 
                          <Link to='/register' className='ml-0.5 underline text-sm cursor-pointer'>Регистрация</Link>
                      </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
    </div>
    </>
  )
}

export default Login
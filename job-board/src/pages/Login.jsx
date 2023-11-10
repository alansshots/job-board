import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
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

    if(error){
      console.log(error);
    } else {
      localStorage.setItem('accessToken', data.session.access_token);
      navigate('/');
    }
  }

  return (
    <>
    <div id="Login">
    <section className="bg-gray-100 m-auto max-w-5xl rounded-[30px] md:border-2 md:border-black md:mt-10">
      <div className="lg:grid lg:grid-cols-12">
        <section className="relative flex h-16 md:h-32 items-start lg:col-span-5 lg:h-full xl:col-span-6">

          <div className="hidden lg:relative lg:block lg:p-12">
            <h2 className="md:mt-6 text-2xl font-bold text-[#0146b1] sm:text-3xl md:text-4xl">
              Вход LOGO 
            </h2>

            <p className="mt-4 leading-relaxed ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam
              dolorum aliquam, quibusdam aperiam voluptatum.
            </p>
          </div>
        </section>

        <div className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl" >
                Вход LOGO
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
                nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>
            </div>

            <form action="" className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                  E-mail
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  value={email} onInput={e => setEmail(e.target.value)}
                />
              </div>
              
              <div className="col-span-6">
                <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
                  Парола
                </label>

                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  value={password} onInput={e => setPassword(e.target.value)}
                />
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button onClick={signInWithEmail} type='button' className="inline-block shrink-0 rounded-md border border-[#0146b1] bg-[#0146b1] px-12 py-3 text-sm font-semibold text-white  transition hover:bg-transparent hover:text-[#0146b1] focus:outline-none focus:ring active:text-[#0146b1]">
                  Вход 
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Нямате профил?
                  <Link to="/register" className="text-gray-700 underline mx-0.5">Регистрация</Link>.
                </p>

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
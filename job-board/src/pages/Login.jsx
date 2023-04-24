import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div id="Login">
      <section className='max-w-4xl m-auto'>
          <div class="mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
              <div class="rounded-lg border-gray-800 border-2 bg-white p-8 shadow-xl lg:col-span-6 lg:p-12">
                <form action="" class="space-y-4">

                  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label class="" for="email">Имейл</label>
                      <input
                        class="w-full rounded-lg border-gray-800 border-2 p-3 text-sm"
                        placeholder="Имейл"
                        type="email"
                        id="email"
                      />
                    </div>

                    <div>
                      <label class="" for="password">Парола</label>
                      <input
                        class="w-full rounded-lg border-gray-800 border-2 p-3 text-sm"
                        placeholder="*********"
                        type="password"
                        id="password"
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex flex-row">
                      <button className="flex items-center px-4 py-1  transition ease-in duration-200 uppercase text-sm rounded-full bg-gray-800 hover:bg-white text-white hover:text-gray-800 border-2 border-gray-900 focus:outline-none">          
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
  )
}

export default Login
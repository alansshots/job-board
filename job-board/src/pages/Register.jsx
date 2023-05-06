import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import supabase from '../config/supabaseClient';
import { Editor } from '@tinymce/tinymce-react';

const Register = () => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  function ConsoleTest() {
     console.log("Test Test Test Test Test Test Test Test Test Test");
  }

  async function submitUserData() {
    const { data, error } = await supabase.auth.signUp(
      {
        email: email,
        password: password,
        options: {
          data: {
            company_name: companyName,
            phone: phone,
            description: description
          }
        }
      }
    )
    // Make a succes route and page to inform user to confirm registration by clicking a link in his/her email 
    // navigate('/'); 
  }


  return (
    <div id="Register">
        <section className='max-w-4xl m-auto'>
          <div className="mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
              <div className="rounded-lg border-gray-800 border-2 bg-white p-8 shadow-xl lg:col-span-6 lg:p-12">
                <form action="" className="space-y-4">
                  <div>
                    <label className="" htmlFor="name">Име на Организация</label>
                    <input
                      className="w-full rounded-lg border-gray-800 border-2 p-3 text-sm"
                      placeholder="Име на Организация, Компания, Фирма..."
                      type="text"
                      id="name"
                      value={companyName} onChange={e => setCompanyName(e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="" htmlFor="email">Имейл</label>
                      <input
                        className="w-full rounded-lg border-gray-800 border-2 p-3 text-sm"
                        placeholder="Имейл"
                        type="email"
                        id="email"
                        value={email} onChange={e => setEmail(e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="" htmlFor="password">Парола</label>
                      <input
                        className="w-full rounded-lg border-gray-800 border-2 p-3 text-sm"
                        placeholder="*********"
                        type="password"
                        id="password"
                        value={password}  onChange={e => setPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  <div> 

                    <div>
                      <label className="" htmlFor="phone">Телефон</label>
                      <input
                        className="w-full rounded-lg border-gray-800 border-2 p-3 text-sm mb-4"
                        placeholder="Телефон"
                        type="tel"
                        id="phone"
                        value={phone} onChange={e => setPhone(e.target.value)}
                      />
                    </div>

                    <label className="" htmlFor="message">Описание</label>
                    <textarea id="mytextarea"
                      className="w-full rounded-lg border-gray-800 border-2 p-3 text-sm"
                      placeholder="Mоля, споделете повече информация за вашата компания. Това може да включва дейност, локация... "
                      rows="8"
                      value={description} onChange={e => setDescription(e.target.value)}
                    ></textarea>

                  </div>

                  <div className="mt-4 flex flex-row">
                      <button onClick={submitUserData} type="button" className="flex items-center px-4 py-1  transition ease-in duration-200 uppercase text-sm rounded-full bg-gray-800 hover:bg-white text-white hover:text-gray-800 border-2 border-gray-900 focus:outline-none">          
                         Регистрация
                      </button>
                      <div className='m-2 flex flex-row justify-center items-center'>
                          <p className='text-sm'>Имате Профил?</p> 
                          <Link to='/login' className='ml-0.5 underline text-sm cursor-pointer'>Вход</Link>
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

export default Register
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import supabase from '../config/supabaseClient';
import RegistrationSuccess from './RegistrationSuccess';
import RegistrationFailure from './RegistrationFailure';

const Register = () => {
  const navigate = useNavigate();
  const [newRegistration, setNewRegistration] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function submitUserData() {

    if(password == confirmPassword) {
    const { error } = await supabase.auth.signUp(
      {
        email: email,
        password: password,
        options: {
          data: {
            company_name: companyName,
            phone: phone,
          }
        }
      }
    )

    if(error){
      setNewRegistration(false);
    } else {
      setNewRegistration(true); 
    }
    // Make a succes route and page to inform user to confirm registration by clicking a link in his/her email 
  }
}


  return (
    <>
     {(function() {
      if (newRegistration == true) {
           return (
              <>
                  <RegistrationSuccess/>
              </>
           );
       } 
        
       if (newRegistration == false){
           return (
              <>
                  <RegistrationFailure/>
              </>
           );
      }
    })()}

  <div id="Register">
    <section className="bg-gray-100 m-auto  max-w-5xl rounded-[30px] border-2 border-black mt-10">
      <div className="lg:grid lg:grid-cols-12">
        <section className="relative flex h-32 items-start lg:col-span-5 lg:h-full xl:col-span-6">

          <div className="hidden lg:relative lg:block lg:p-12">
            <h2 className="mt-6 text-2xl font-bold text-[#0146b1] sm:text-3xl md:text-4xl">
              Добре дошли LOGO 
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
                Добре дошли LOGO
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
                nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>
            </div>

            <form action="" className="mt-8 grid grid-cols-6 gap-6">
            <div className="col-span-6">
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                  Име на Компания
                </label>

                <input
                  type="text"
                  id="companyName"
                  name="company_name"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  value={companyName} onInput={e => setCompanyName(e.target.value)}
                />
              </div>

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
                <label htmlFor="Phone" className="block text-sm font-medium text-gray-700">
                  Тел. Номер
                </label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  value={phone} onInput={e => setPhone(e.target.value)}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
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

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="passwordConfirmation" className="block text-sm font-medium text-gray-700">
                  Потвърди парола
                </label>

                <input
                  type="password"
                  id="passwordConfirmation"
                  name="password_confirmation"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  value={confirmPassword} onInput={e => setConfirmPassword(e.target.value)}
                />
              </div>

              {/* <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                  />

                  <span className="text-sm text-gray-700">
                    I want to receive emails about events, product updates and
                    company announcements.
                  </span>
                </label>
              </div> */}

              <div className="col-span-6">
                <p className="text-sm text-gray-500">
                Със създаването на акаунт се съгласявате с нашите
                  <a href="#" className="text-gray-700 underline mx-0.5">общи условия</a>
                  и
                  <a href="#" className="text-gray-700 underline  mx-0.5">политика за поверителност</a>.
                </p>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button 
                // onClick={submitUserData} 
                type='button' className="inline-block shrink-0 rounded-md border border-[#0146b1] bg-[#0146b1] px-12 py-3 text-sm font-semibold text-white  transition hover:bg-transparent hover:text-[#0146b1] focus:outline-none focus:ring active:text-[#0146b1]">
                  Създаване на профил
                </button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Вече имате профил?
                  <Link to="/login" className="text-gray-700 underline mx-0.5">Вход</Link>.
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

export default Register
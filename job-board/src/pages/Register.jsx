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
  const [companyNumber, setCompanyNumber] = useState("");
  const [vatIsValid, setVatIsValid] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneIsValid, setPhoneIsValid] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");

  const checkVatNumberFormat = () => {
    const vatNumberRegex = /^(BG)?\d{9,10}$/;

    if (vatNumberRegex.test(companyNumber)) {
      setVatIsValid(true);
    } else {
      setVatIsValid(false);
    }
  };

  const checkPhoneNumber = () => {
    const phoneNumberRegex = /^(?:\+359|0|359)?(?:8[789]\d{1}|\d{9})$/;

    if (phoneNumberRegex.test(phone)) {
      setPhoneIsValid(true);
    } else {
      setPhoneIsValid(false);
    }
  }

  async function submitUserData() {
    if(password == confirmPassword && vatIsValid == true) {
    const { error } = await supabase.auth.signUp(
      {
        email: email,
        password: password,
        options: {
          data: {
            company_name: companyName,
            phone: phone,
            company_number: companyNumber
          }
        }
      }
    )

    if(error){
      setNewRegistration(false);
      // console.log(error)
      setTimeout(() => {
        setNewRegistration(null);
      }, 5000);
    } else {
      setNewRegistration(true); 
      setTimeout(() => {
        setNewRegistration(null);
      }, 5000);
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
    <section className="bg-gray-100 m-auto max-w-5xl rounded-[30px] md:border-2 md:border-black md:mt-10">
      <div className="lg:grid lg:grid-cols-12">
        <section className="relative flex h-16 md:h-32 items-start lg:col-span-5 lg:h-full xl:col-span-6">

          <div className="hidden lg:relative lg:block lg:p-12">
            <h2 className="md:mt-6 text-2xl font-bold text-[#0146b1] sm:text-3xl md:text-4xl">
              Добре дошли!
            </h2>

            <p className="mt-4 leading-relaxed ">
              Ако сте компания, фирма или организация, търсеща служители, можете да създадете акаунт в нашата платформа и успешно да намерите перфектния кандидат за вашия екип.
            </p>
          </div>
        </section>

        <div className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl" >
                Добре дошли!
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Ако сте компания, фирма или организация, търсеща служители, можете да създадете акаунт в нашата платформа и успешно да намерите перфектния кандидат за вашия екип.
              </p>
            </div>

            <form action="" className="mt-8 grid grid-cols-6 gap-6">
            <div className="col-span-6">
                <label htmlFor="companyName" className="block text-sm font-semibold text-gray-700">
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
                <label htmlFor="companyNumber" className="block text-sm font-semibold text-gray-700">
                ЕИК/БУЛСТАТ Нормер на Компания
                </label>

                <input
                  type="number"
                  id="companyNumber"
                  name="company_number"
                  // className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  value={companyNumber} onInput={e => setCompanyNumber(e.target.value)}
                  className={`mt-1 w-full rounded-md border ${vatIsValid === false ? 'border-red-500' : 'border-gray-200'} bg-white text-sm text-gray-700 shadow-sm`}
                  onBlur={checkVatNumberFormat}
                />

                {vatIsValid === false && (
                  <p className="text-red-500 text-sm mt-1">Невалиден ЕИК/БУЛСТАТ номер</p>
                )}
                {vatIsValid === true && (
                  <p className="text-green-500 text-sm mt-1">Валиден ЕИК/БУЛСТАТ номер</p>
                )}
              </div>

              <div className="col-span-6">
                <label htmlFor="Email" className="block text-sm font-semibold  text-gray-700">
                  E-mail
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  value={email} onInput={e => setEmail(e.target.value)}
                  onChange={submitUserData.handleEmailChange}
                />
              </div>
              
              <div className="col-span-6">
                <label htmlFor="Phone" className="block text-sm font-semibold text-gray-700">
                  Тел. Номер
                </label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  value={phone} onInput={e => setPhone(e.target.value)}
                  lassName={`mt-1 w-full rounded-md border ${phoneIsValid === false ? 'border-red-500' : 'border-gray-200'} bg-white text-sm text-gray-700 shadow-sm`}
                  onBlur={checkPhoneNumber}
                />

                {phoneIsValid == false && (
                  <p className="text-red-500 text-sm mt-1">Невалиден тел. номер</p>
                )}

              </div>

              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="Password" className="block text-sm font-semibold text-gray-700">
                  Парола <span className='text-xs font-medium'>(поне 6 символа)</span>
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
                <label htmlFor="passwordConfirmation" className="block text-sm font-semibold text-gray-700">
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
                Със създаването на акаунт се съгласявате с
                  <a href="https://policies.google.com/privacy" className="text-gray-700 underline mx-0.5"> Политиката за поверителност </a>
                  и
                  <a href="https://policies.google.com/terms" className="text-gray-700 underline  mx-0.5"> Общите условия </a>
                  на Google. 
                </p>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button 
                onClick={submitUserData} 
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
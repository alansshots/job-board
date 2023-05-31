import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import supabase from '../config/supabaseClient';
import RegistrationSuccess from './RegistrationSuccess';
import RegistrationFailure from './RegistrationFailure';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const AddOffer = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [salary, setSalary] = useState("");
  const [experience, setExperience] = useState("");
  const [industry, setIndustry] = useState("");
  const [location, setLocation] = useState("");
  const [content, setContent] = useState("");

  const [currentUser, setCurrentUser] = useState("");
  const jwt = localStorage.getItem('accessToken');

  useEffect(() => {
    async function getUserData() {
      const { data, error } = await supabase.auth.getUser(jwt);
      if (data && data.user) {
        setCurrentUser(data.user);
        console.log(data.user);
      }
    }

    getUserData();
  }, []);

  async function submitNewOffer() {
    // getUserData()
    const date = new Date().toLocaleDateString();
    const { data, error } = await supabase
    .from('offers')
    .insert([
      {  
        title: title,
        created_at: date,
        author: currentUser.user_metadata.company_name,
        summary: currentUser.id,
        phone: 34245230,
        email: currentUser.email,
        salary: salary,
        experience: experience,
        industry: industry,
        location: location,
        content: content
      },
    ])

    if (error) {
      console.error('Error inserting new offer:', error);
      // Handle error state
    } else {
      console.log('New offer inserted successfully:', data);
      // Handle success state
      navigate('/offers');
    }
  }

  return (
    <div>
      <div className='m-auto max-w-6xl mt-12'>
          <h1 className='text-5xl font-semibold'><span className='text-[#0146b1]'>Създай</span> Обява</h1>
      </div>
    
    <div className='m-auto max-w-4xl'>

    <div className='mt-10'>
        <div>
          <h3 className='mb-2 font-semibold'>Заглавие</h3>
          <div>
            <label
              htmlFor="Title"
              className="relative block overflow-hidden rounded-md border border-gray-100 bg-white px-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                value={title} onInput={e => setTitle(e.target.value)}
                type="text"
                id="Title"
                placeholder="Моля въведете заглавие..."
                className="peer h-8 w-full border-none bg-transparent p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />
            </label>

          </div>
        </div>
      </div>

      <div className='mt-4'>
        <div>
          <h3 className='mb-2 font-semibold'>Заплата</h3>
          <div>
            <label
              htmlFor="Salary"
              className="relative block overflow-hidden rounded-md border border-gray-100 bg-white px-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
                value={salary} onInput={e => setSalary(e.target.value)}
                type="text"
                id="Salary"
                placeholder="Моля въведете брутно или нетно възнаграждение..."
                className="peer h-8 w-full border-none bg-transparent p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />
            </label>

          </div>
        </div>

        <div className='mt-4'>

        <h3 className='mb-2 text-md font-semibold'>Опит</h3>

        <select
          value={experience} onInput={e => setExperience(e.target.value)}
          name="HeadlineAct"
          id="HeadlineAct"
          placeholder='Mоля изберете период'
          className="mt-1.5 w-full rounded-lg bg-white border-gray-100 text-gray-700 shadow-sm sm:text-sm"
        >
          <option value="">Моля изберете период</option>
          <option value="Без опит">Без опит</option>
          <option value="3 месеца">3 месеца</option>
          <option value="6 месеца">6 месеца</option>
          <option value="1 година">1 година</option>
          <option value="2 години">2 години</option>
          <option value="Над 2 години">Над 2 години</option>
          <option value="Над 5 години">Над 5 години</option>
          <option value="Над 10 години">Над 10 години</option>
        </select>
      </div>

      </div>

      {/* <div className='mt-5'>
        <div>
          <h3 className='mb-2 font-semibold'>Бранш</h3>
          <fieldset className="grid grid-cols-2 gap-4">

          <div>
            <input
              type="radio"
              name="DeliveryOption"
              value="DeliveryStandard"
              id="DeliveryStandard"
              className="peer hidden [&:checked_+_label_svg]:block"
              checked
            />

            <label
              htmlhtmlFor="DeliveryStandard"
              className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
            >
              <div className="flex items-center justify-between">
                <p className="font-bold text-[#0146b1]">Хотелиерство</p>

                <svg
                  className="hidden h-5 w-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <p className="mt-1 text-gray-700">(Хотели, къщи за гости, къмпинги и други)</p>
            </label>
          </div>

          <div>
            <input
              type="radio"
              name="DeliveryOption"
              value="DeliveryPriority"
              id="DeliveryPriority"
              className="peer hidden [&:checked_+_label_svg]:block"
            />

            <label
              htmlhtmlFor="DeliveryPriority"
              className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
            >
              <div className="flex items-center justify-between">
                <p className="font-bold text-[#0146b1]">Ресторантьорство</p>

                <svg
                  className="hidden h-5 w-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <p className="mt-1 text-gray-700">(Продажба на храни и напитки за консумация)</p>
            </label>
          </div>
        </fieldset>
        </div>
      </div> */}

      <div className='mt-4'>
        <h3 className='mb-2 font-semibold'>Бранш</h3>

        <select
          value={industry} onInput={e => setIndustry(e.target.value)}
          name="HeadlineAct"
          id="HeadlineAct"
          placeholder='Mоля изберете бранш'
          className="mt-1.5 w-full rounded-lg bg-white border-gray-100 text-gray-700 shadow-sm sm:text-sm"
        >
          <option value="">Моля изберете бранш</option>
          <option value="Хотелиерство">Хотелиерство</option>
          <option value="Ресторантьорство">Ресторантьорство</option>
          <option value="Търговия">Търговия</option>
          <option value="Друг">Друг</option>
        </select>

      </div>

      <div className='mt-4'>
        <div>
          <h3 className='mb-2 font-semibold'>Локация</h3>
          <div>
            <label
              htmlFor="Salary"
              className="relative block overflow-hidden rounded-md border border-gray-100 bg-white px-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
              <input
              value={location} onInput={e => setLocation(e.target.value)}
                type="text"
                id="Salary"
                placeholder="Моля въведете населено място..."
                className="peer h-8 w-full border-none bg-transparent p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />
            </label>

          </div>
        </div>
      </div>


      <div className='m-auto mt-10'>
          <h2 className='text-2xl font-semibold'>Oсновно съдаржание</h2>
      </div>

      <div className='m-auto max-w-5xl mt-5 p-4'>
      <CKEditor 
          editor={ ClassicEditor }
          data="<p>Описание, на Вашата обява.</p>"
          // onReady={ editor => {
          //     // You can store the "editor" and use when it is needed.
          //     // console.log( 'Editor is ready to use!', editor );
          // } }
          // onClick={(event, editor) => {
          //   const data = editor.getData();
          //   setContent(data)
          // }}
          onChange={ ( event, editor ) => {
              const data = editor.getData();
              setContent(data);
              // console.log( { event, editor, data } );
          } }
          // onBlur={ ( event, editor ) => {
          //     console.log( 'Blur.', editor );
          // } }
          // onFocus={ ( event, editor ) => {
          //     console.log( 'Focus.', editor );
          // } }
      />
      </div>

      <div className='flex flex-row justify-center items-center w-[150px]'>
      <button onClick={submitNewOffer} type="button" className=" py-2 px-4 bg-[#0146b1] hover:scale-105 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md rounded-lg ">
        Публикувай
      </button>
      </div>


     </div>
    </div>
  )
}

export default AddOffer
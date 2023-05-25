import React from 'react'
import { useEffect, useState } from 'react';
import supabase from '../config/supabaseClient';
const { pathname } = window.location;

import OffersCard from '../components/OffersCard'

const CompanyPage = () => {
    const paths = pathname.split("/").filter(entry => entry !== "");
    const lastPath = paths[paths.length - 1];

    const [user, setUser] = useState('')

    useEffect(() => {
      const fetchUser = async () => {

      let { data: users, error } = await supabase
      .from('users')
      .select()
      .eq('id', lastPath)

      console.log(users[0]);
      setUser(users[0])
      }
  
      fetchUser();
    }, [])


  return (
    <div id="CompanyPage" class="m-auto mt-10 max-w-6xl">
        <div className="bg-white rounded-lg shadow-xl pb-8">
            <div className="w-full h-[250px]">
                <img src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg" className="w-full h-full rounded-tl-lg rounded-tr-lg" />
            </div>
            <div className="flex flex-col items-center -mt-20">
                <img src="https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png" className="w-40 border-4 border-white rounded-full" />
                <div className="flex items-center space-x-2 mt-2">
                    {/* <p className="text-2xl">{user.company_name}</p> */}
                    <span className="bg-blue-500 rounded-full p-1" title="Verified">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-100 h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </span>
                </div>
                <p className="text-gray-700">Софтуерно инженерство</p>
                <p className="text-sm text-gray-500">Бургас, България</p>
            </div>
        </div>

        <div className='flex flex-row mt-5'>
          <div className="bg-white rounded-lg shadow-xl p-8 mr-4">
             <h4 className="text-xl text-gray-900 font-bold">Кратнка информация</h4>
                <ul className="mt-2 text-gray-700">
                    <li className="flex border-y py-2">
                        <span className="font-bold w-24">Компания:</span>
                        <span className="text-gray-700">Amanda S. Ross</span>
                    </li>
                    <li className="flex border-b py-2">
                        <span className="font-bold w-24">Локация:</span>
                        <span className="text-gray-700">New York, US</span>
                    </li>
                    <li className="flex border-b py-2">
                        <span className="font-bold w-24">Бранш:</span>
                        <span className="text-gray-700">Разработка на софтуер</span>
                    </li>
                    <li className="flex border-b py-2">
                        <span className="font-bold w-24">Дата на основаване:</span>
                        <span className="text-gray-700">24 Jul, 1991</span>
                    </li>
                    <li className="flex border-b py-2">
                        <span className="font-bold w-24">Телефон:</span>
                        <span className="text-gray-700">(123) 123-1234</span>
                    </li>
                    <li className="flex border-b py-2">
                        <span className="font-bold w-24">Email:</span>
                        <span className="text-gray-700">{user.email}</span>
                    </li>
                </ul>
            </div>

            <div className="flex-1 bg-white rounded-lg shadow-xl p-8">
                <h4 className="text-xl text-gray-900 font-bold">Информация</h4>
                <p className="mt-2 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, minus.
                </p>
            </div>

        </div>

        <div className="bg-white rounded-lg shadow-xl mt-4 p-8">
          <h4 className="text-xl text-gray-900 font-bold">Публикувани Обяви</h4>
          <div className="flex flex-row px-4">
              <OffersCard/>
          </div>
        </div>

    </div>
  )
}

export default CompanyPage
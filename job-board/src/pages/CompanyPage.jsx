import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import supabase from '../config/supabaseClient';
const { pathname } = window.location;

const CompanyPage = () => {
  const paths = pathname.split("/").filter(entry => entry !== "");
  const lastPath = paths[paths.length - 1];

  const [user, setUser] = useState('');
  const [offers, setOffers] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: users, error } = await supabase
        .from('users')
        .select()
        .eq('id', lastPath);

      if (users && users.length > 0) {
        setUser(users[0]);
        fetchAllOffers(users[0]);
      }
    };

    fetchUser();
  }, [lastPath]);
  
  const fetchAllOffers = async (user) => {
    const { data, error } = await supabase
      .from('offers')
      .select('*')
      .eq('email', user.email)
  
    if (error) {
      setFetchError('Could not fetch the offers');
      setOffers(null);
    }
  
    if (data) {
      setOffers(data);
      setFetchError(null);
    }
  };

  return (
    <div id="CompanyPage" className="m-auto mt-10 max-w-6xl">
        <div className="bg-white rounded-lg shadow-xl pb-8">
            <div className="w-full h-[250px]">
                <img src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg" className="w-full h-full rounded-tl-lg rounded-tr-lg" />
            </div>
            <div className="flex flex-col items-center -mt-20">
                <img src="https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png" className="w-40 border-4 border-white rounded-full" />
                <div className="flex items-center space-x-2 mt-2">
                    <p className="text-2xl font-semibold">{user.company_name}</p>
                    <span className="bg-blue-500 rounded-full p-1" title="Verified">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-100 h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
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
          <div className="flex flex-row flex-wrap px-4">
              {/* <OffersCard/> */}
          {fetchError && (<p>{fetchError}</p>)}
            {offers && (
              <div className="offers">
                <div className="offers-grid">
                  {offers.map(offer => (

                    <article key={offer.id} className="my-4 mx-6 rounded-xl border-2 border-gray-100 bg-white shadow-sm trasition duration-200 hover:scale-[101%] hover:shadow-md">
                    <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
                      <Link to={offer.slug} className="block shrink-0"> 
                        <img src="" className="h-14 w-14 rounded-lg object-cover"/>
                      </Link>
            
                        <div>
                          <h3 className="font-medium sm:text-lg">
                            <Link to={offer.slug} href="#" className="hover:underline">
                            {offer.title}
                            </Link>
                          </h3>
            
                          <p className="line-clamp-2 text-sm text-gray-700">
                            {offer.summary}
                          </p>
            
                          <div className="mt-2 sm:flex sm:items-center sm:gap-2">

                            {offer.salary && (
                            <span className="whitespace-nowrap font-semibold rounded-full bg-[#0852bf] px-2.5 py-0.5 text-xs text-white" >
                              {offer.salary} лв
                            </span>
                            )
                            }

                            <span className="whitespace-nowrap rounded-full bg-[#0852bf] px-2.5 py-0.5 text-xs text-white" >
                            {offer.experience} 
                            </span>
            
                            {/* <span className="whitespace-nowrap rounded-full bg-[#0852bf] px-2.5 py-0.5 text-xs text-white" >
                            </span>  */}
            
            
                          <span className="hidden sm:block" aria-hidden="true">&middot;</span>
            
                          <p className="hidden sm:block sm:text-xs sm:text-gray-500">
                              Публикувано от 
                            <a href="#" className="ml-1 font-medium underline hover:text-gray-700">
                              {offer.author}
                            </a>
                          </p>            
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Link to={offer.slug} className="items-center text-white bg-[#0852bf] transition ease-in duration-200 hover: px-2 py-2 text-sm cursor-pointer mb-5 mr-5 rounded-xl font-semibold hover:shadow-xl">
                      Свържи се
                    </Link>
                  </div>
                </article>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

    </div>
  )
}

export default CompanyPage
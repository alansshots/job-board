import React, { useEffect, useState, useCallback } from 'react';
import supabase from '../config/supabaseClient';
import { Calendar } from 'react-feather';

const OfferPage = () => {
  const [fetchError, setFetchError] = useState(null);
  const [offer, setOffer] = useState(null);

  const { pathname } = window.location;
  const paths = pathname.split("/").filter(entry => entry !== "");
  const lastPath = paths[paths.length - 1];

  useEffect(() => {
  async function fetchOffer() {
    const { data, error } = await supabase
      .from('offers')
      .select()
      .eq('slug', lastPath);
    
    if (error) {
      setFetchError('Could not fetch the offers');
      setOffer(null);
    }

    if (data) {
      setOffer(data[0]);
      // console.log(data[0]);
      setFetchError(null);
    }
  }
    fetchOffer();
  }, [lastPath]);

  return (
    <>
      {offer && (
        <div id='OfferPage' className='m-auto max-w-6xl flex flex-row items-start justify-center'>
          <div className='mt-6 rounded-xl w-9/12'>
            <div className='bg-white rounded-xl p-6'>
              <h2 className='text-2xl'>{offer.title}</h2>
              <div className="mt-2 sm:flex sm:items-center sm:gap-2">
                <span className="whitespace-nowrap rounded-full bg-[#0852bf] px-2.5 py-0.5 text-md text-white shadow-md">
                  {offer.salary} лв.
                </span>
      
                <span className="whitespace-nowrap rounded-full bg-[#0852bf] px-2.5 py-0.5 text-md text-white shadow-md">
                  {offer.experience}
                </span>
              </div>      
            </div>
            <div className='bg-white rounded-xl p-6 mt-5'>
              <div className='mb-2 flex flex-row items-center'>
                <Calendar/>
                <p className='ml-2'>{offer.created_at}</p>
              </div>  

              <h2 className='my-2 font-bold'>{offer.title}</h2>

              <div className='content'>
                {offer.content}
              </div>

              <div className='mt-2'>
                <ul className='mt-1'>
                  <li className='font-semibold'>
                    <h3>Email за връзка:</h3>
                    <h3>{offer.email}</h3>
                  </li>
                  <li className='font-semibold'>
                    <h3>Телефон за връзка:</h3>
                    <h3>{offer.phone}</h3>
                  </li>
                  </ul>
              </div>

            </div>
          </div>
      
          <div className='mt-6 rounded-xl w-1/2'>
            <div className='bg-white mx-5 flex-col justify-center items-center p-6 rounded-2xl cursor-pointer shadow-md'>
              <div className='mb-2 flex flex-row items-center justify-left'>
                <img className='rounded-full w-10 h-10' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
                <h2 className='ml-2 text-xl font-semibold'>Company Name</h2>
              </div>
              
              <div className='flex flex-col justify-between items-left mt-1 border-t border-gray-100 pt-2'>
                <h3 className='font-semibold mb-1'>Информация</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos culpa quis ipsam explicabo natus unde, nulla fuga temporibus illo inventore iste dicta id iure laudantium eveniet neque nihil officia repellat qui cumque similique. Possimus facere, dignissimos adipisci explicabo magni culpa rem enim nulla ad, porro voluptas! Deserunt reprehenderit facilis impedit.</p>
                <ul className='mt-1'>
                  <li className='font-semibold'>
                    <h3>Email за връзка:</h3>
                    <h3>colorblock@mail.com</h3>
                  </li>
                  <li className='font-semibold'>
                    <h3>Телефон за връзка:</h3>
                    <h3>+359 889 647 761</h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default OfferPage;

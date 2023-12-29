import React, { useEffect, useState, useCallback } from 'react';
import supabase from '../config/supabaseClient';
import { Calendar } from 'react-feather';
import { Link } from 'react-router-dom';

const OfferPage = () => {
  const [fetchError, setFetchError] = useState(null);
  const [offer, setOffer] = useState(null);
  const [offerAuthor, setOfferAuthor] = useState('');

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
  
      if (data && data.length > 0) {
        const offerData = data[0];
        setOffer(offerData);
        
        // Fetch user data using author_id
        const { data: userData, error: userError } = await supabase
          .from('users')
          .select()
          .eq('id', offerData.author_id);
  
        if (userError) {
          console.error('Error fetching user data:', userError);
        } else if (userData && userData.length > 0) {
          const user = userData[0];
          console.log('Fetched user data:', user);
          // Do something with the user data if needed
          setOfferAuthor(user);
        }
        
        setFetchError(null);
      }
    }
  
    fetchOffer();
  }, [lastPath]);
  

  return (
    <>
      {offer && (
        <div id='OfferPage' className='m-auto max-w-6xl flex flex-col sm:flex-row items-start justify-center'>
          <div className='mt-6 rounded-xl sm:w-9/12'>
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
                <div dangerouslySetInnerHTML={{ __html: offer.content }}></div>
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
      
          <div className='mt-6 rounded-xl w-full sm:w-1/2'>
            <div className='bg-white sm:mx-5 flex-col justify-center items-center p-6 rounded-2xl shadow-md'>
              <div className='mb-2 flex flex-row items-center justify-left'>
                <img className='rounded-full w-10 h-10'
                 src={offerAuthor.profile_image_url || 'https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png'}
                 alt="" />
                <Link to={`/company/${offerAuthor.id}`}  className='ml-2 text-xl font-semibold hover:border-b-2 hover:border-black transition-500 cursor-pointer'>{offerAuthor.company_name}</Link>
              </div>
              
              <div className='flex flex-col justify-between items-left mt-1 border-t border-gray-100 pt-2'>
                <h3 className='font-semibold mb-1'>Информация</h3>
                <p dangerouslySetInnerHTML={{ __html: offerAuthor.info }}>
                </p>
                <ul className='mt-1'>
                  <li className='font-semibold'>
                    <h3>Email за връзка:</h3>
                    <h3>{offerAuthor.email}</h3>
                  </li>
                  <li className='font-semibold'>
                    <h3>Телефон за връзка:</h3>
                    <h3>+359 {offerAuthor.phone}</h3>
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

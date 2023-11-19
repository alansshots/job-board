import React from 'react'
import supabase from '../config/supabaseClient'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const LatestJobs = () => {

    const [fetchError, setFetchError] = useState(null)
    const [offers, setOffers] = useState(null)
  
  useEffect(() => {
    const fetchOffers = async () => {
      const { data, error } = await supabase
        .from('offers')
        .select('*')
        .order('created_at', { ascending: false }) 
        .limit(3);
        
        if (error) {
          setFetchError('Could not fetch the offers')
          setOffers(null)
        }
        if (data) {
          setOffers(data);
          setFetchError(null)
        }
      }
  
      fetchOffers()
    }, [])

    console.log(offers);
  return (
    <div className='bg-gray-100 pb-16'>
        <div className='m-auto max-w-6xl pt-12 bg-gray-100'>
            <h1 className='ml-5 sm:ml-0.5 text-5xl font-semibold'><span className='text-[#0146b1]'>Последни</span> Обяви</h1>
        </div>
        
        <div className='m-auto max-w-6xl mt-16 flex flex-row items-center'>
        {fetchError && (<p>{fetchError}</p>)}
            {offers && (
            <div className='flex flex-col md:flex-row items-center justify-between w-full'>
                {offers.map(offer => (
                <div key={offer.id} className='bg-white m-5 w-5/6 md:w-5/12 mx-6 flex-col justify-center items-center p-6 rounded-2xl cursor-pointer transition duration-200 hover:scale-105 hover:shadow-xl shadow-md'>
                    <h2 className='text-2xl text-black font-semibold'>{offer.title}</h2>
                    
                    <div className='mt-2'>
                        <span className='bg-[#16368d] text-sm rounded-xl text-white px-2 py-1 mr-2'>{offer.location}</span>
                        {offer.salary && (
                          <span className='bg-[#16368d] text-sm rounded-xl text-white px-2 py-1 mr-2'>{offer.salary} лв</span>
                        )
                        }
                    
                    </div>
                    
                    <h2 className='mt-5 text-md font-semibold text-[#0146b1]'>Опит: {offer.experience}</h2>
                    
                    <div className='flex flex-col justify-center items-left mt-16 border-t boreder-gray-100 pt-2'>
                        
                        <div className=" mb-2 flex flex-row justify-left items-center">
                          {/* <a href="">
                                <img className='rounded-full w-10 h-10' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
                          </a> */}
                          <div>
                            <a href="" className='text-[#0146b1] text-sm ml-0.5'>{offer.author}</a>
                          </div>
                        </div>

                        <div>
                            <Link to={"offers/" + offer.slug} className='bg-[#0146b1] w-24 md:w-20 text-white transition duration-200 hover:scale-105 text-sm px-1 py-0.5 rounded-xl flex flex-row item-center justify-center'>
                                Свържи се
                            </Link>
                        </div>

                    </div>
                </div>
                ))}
            </div>
            )}
        </div>

    </div>
  )
}

export default LatestJobs
import React from 'react'
import supabase from '../config/supabaseClient'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const OffersCard = () => {
  const [fetchError, setFetchError] = useState(null)
  const [offers, setOffers] = useState(null)

useEffect(() => {
const fetchOffers = async () => {
const { data, error } = await supabase
.from('offers')
.select()
      
      if (error) {
        setFetchError('Could not fetch the offers')
        setOffers(null)
      }
      if (data) {
        setOffers(data)
        setFetchError(null)
      }
    }

    fetchOffers()
  }, [])

  return (   
    <>
    {fetchError && (<p>{fetchError}</p>)}
      {offers && (
        <div className="offers">
          <div className="offers-grid">
            {offers.map(offer => (

              <article key={offer.id} className="my-4 rounded-xl border-2 border-gray-100 bg-white shadow-sm trasition duration-200 hover:scale-[101%] hover:shadow-md">
              <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
                <Link to={offer.slug} className="block shrink-0"> 
                  <img src="" className="h-14 w-14 rounded-lg object-cover"/>
                </Link>
      
                  <div>
                    <h3 className="font-medium sm:text-lg">
                      <a href="#" className="hover:underline">
                       {offer.title}
                      </a>
                    </h3>
      
                    <p className="line-clamp-2 text-sm text-gray-700">
                      {offer.summary}
                    </p>
      
                    <div className="mt-2 sm:flex sm:items-center sm:gap-2">

                      <span className="whitespace-nowrap font-semibold rounded-full bg-[#0852bf] px-2.5 py-0.5 text-xs text-white" >
                        {offer.salary} лв
                      </span>
      
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
  </>
  )
}

export default OffersCard
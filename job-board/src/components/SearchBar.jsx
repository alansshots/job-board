import React from 'react'
import supabase from '../config/supabaseClient'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Search, ArrowRight } from 'react-feather'

const SearchBar = ( { onSearch } ) => {
  const [fetchError, setFetchError] = useState(null);
  const [offers, setOffers] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleButtonClick = async () => {
    // fetchOffers();
    // onSearch(offers);
    const data = await fetchOffers(searchQuery);
    if (data) {
      onSearch(data);
    }
  };

  const fetchOffers = async () => {
    let query = supabase.from('offers').select('*');

    // Apply search query if it exists
    if (searchQuery) {
      query = query.ilike('title', `%${searchQuery}%`);
    }

    const { data, error } = await query;

    if (error) {
      setFetchError('Could not fetch the offers');
      setOffers(null);
      return null;  // Return null in case of an error
    }

    if (data) {
      setOffers(data);
      // console.log(data);
      setFetchError(null);
      return data;  // Return the data
    }
  }

  return (
    <div id="SearchBar">
        <div className='flex flex-row justify-around items-center bg-white rounded-3xl m-auto max-w-4xl mt-4 shadow-md transition duration-200 hover:shadow-xl'>
            <Search className='text-black mx-2'/>
            <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleButtonClick();
              }
            }}
            type="text" placeholder='Професия или ключова дума' className='text-black w-10/12 border-transparent outline-none focus:border-transparent focus:ring-0'/>
            <button onClick={handleButtonClick} className='bg-[#0146b1] py-4 w-2/12 rounded-r-2xl flex justify-center'>
                <ArrowRight className='text-white trasition duration-100 hover:scale-110'/>
            </button>
        </div>
    </div>
  )
}

export default SearchBar
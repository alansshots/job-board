import React from 'react'
import { useState } from 'react'
import supabase from '../config/supabaseClient'

import Filters from '../components/Filters'
import OffersCard from '../components/OffersCard'
import SearchBar from '../components/SearchBar'

const Offers = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (selected) => {
    setSelectedFilters(selected);
  };


  return (
    <div id="Offers">
      <SearchBar/>
      <div className='flex flex-row justify-center items-start m-auto max-w-4xl'>
          <div className='filters mx-2 rounded-xl w-1/2'>
            <Filters onFilterChange={handleFilterChange} />
          </div>
          <div className='mx-2 rounded-xl w-full'>
              <OffersCard selectedFilters={selectedFilters} />
          </div>
      </div>
    </div>
  )
}

export default Offers
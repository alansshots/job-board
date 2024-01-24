import React from 'react'
import { useState } from 'react'
import supabase from '../config/supabaseClient'
import { ArrowUp } from 'react-feather'

import Filters from '../components/Filters'
import OffersCard from '../components/OffersCard'
import SearchBar from '../components/SearchBar'
import ScrollToTop from '../components/ScrollToTop'

const Offers = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [searchedData, setSearchedData] = useState(null);

  const handleFilterChange = (selected) => {
    setSelectedFilters(selected);
  };

  const handleSearch = (data) => {
    setSearchedData(data);
  }; 

  return (
    <div id="Offers" className='px-2'>
      <ScrollToTop/>
      <SearchBar onSearch={handleSearch} />
      <div className='flex flex-col md:flex-row justify-center items-start m-auto max-w-4xl'>
          <div className='filters sm:mx-2 rounded-xl w-full md:w-1/2'>
            <Filters onFilterChange={handleFilterChange} />
          </div>
          <div className='sm:mx-2 rounded-xl w-full'>
              <OffersCard selectedFilters={selectedFilters} searchedData={searchedData} />
          </div>
      </div>
    </div>
  )
}

export default Offers
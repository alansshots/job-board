import React from 'react'

import Filters from '../components/Filters'
import OffersCard from '../components/OffersCard'
import SearchBar from '../components/SearchBar'
const Offers = () => {
  return (
    <div id="Offers">
      <SearchBar/>
      <div className='flex flex-row justify-center items-start m-auto max-w-4xl'>
          <div className='filters p-3 mx-2 rounded-xl w-1/2'>
            <Filters/>
          </div>
          <div className='p-3 mx-2 rounded-xl'>
            <OffersCard/>
            <OffersCard/>
            <OffersCard/>
            <OffersCard/>
            <OffersCard/>
          </div>
      </div>
    </div>
  )
}

export default Offers
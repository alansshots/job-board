import React from 'react'
import { NavLink } from 'react-router-dom'
import { Search, ArrowRight } from 'react-feather'

const SearchBar = () => {
  return (
    <div id="SearchBar">
        <div className='flex flex-row justify-around items-center bg-white rounded-3xl m-auto max-w-4xl mt-4 shadow-md transition duration-200 hover:shadow-xl'>
            <Search className='text-black mx-2'/>
            <input type="text" placeholder='Професия или ключова дума' className='text-black w-10/12 border-transparent outline-none focus:border-transparent focus:ring-0'/>
            <NavLink className='bg-[#0146b1] py-4 w-2/12 rounded-r-2xl flex justify-center'>
                <ArrowRight className='text-white trasition duration-100 hover:scale-110'/>
            </NavLink>
        </div>
    </div>
  )
}

export default SearchBar
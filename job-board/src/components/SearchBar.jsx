import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Search, ArrowRight } from 'react-feather'

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const currentURL = window.location.href;

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
  // Update the browser's URL with the input value
    const newURL = `${currentURL}/${inputValue}`;
    window.history.pushState(null, '', newURL);
  };

  return (
    <div id="SearchBar">
        <div className='flex flex-row justify-around items-center bg-white rounded-3xl m-auto max-w-4xl mt-4 shadow-md transition duration-200 hover:shadow-xl'>
            <Search className='text-black mx-2'/>
            <input
            value={inputValue}
            onChange={handleInputChange}
            type="text" placeholder='Професия или ключова дума' className='text-black w-10/12 border-transparent outline-none focus:border-transparent focus:ring-0'/>
            <button onClick={handleButtonClick} className='bg-[#0146b1] py-4 w-2/12 rounded-r-2xl flex justify-center'>
                <ArrowRight className='text-white trasition duration-100 hover:scale-110'/>
            </button>
        </div>
    </div>
  )
}

export default SearchBar
import React from 'react'
import { Calendar } from 'react-feather'
import { Users } from 'react-feather'

const CompanyPage = () => {
  return (
    <div id="CompanyPage">
        <div className='header bg-gray-200 flex flex-row items-center justify-around'>
          <div >
            <img src="" alt="company-logo" className='w-14 h-14 roudnded-xl' />

          </div>

          <div>      
            <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500  ">
                <li class="mr-2">
                    <a href="#" class="inline-block p-4 text-gray-800 flex flex-col items-center">  
                      <span><Users/></span>
                      <p>25/35</p>  
                    </a>
                </li>
                <li class="mr-2">
                    <a class="inline-block p-4 text-gray-800 flex flex-col items-center">
                       <span><Calendar/></span>
                       <p>2013</p>
                    </a>
                </li>
                <li class="mr-2">
                    <a class="inline-block p-4 text-gray-800 ">
                        Results
                    </a>
                </li>
                <li class="mr-2">
                    <a class="inline-block p-4 text-gray-800 ">
                        Live
                    </a>
                </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default CompanyPage
import React from 'react'

const LatestJobs = () => {
  return (
    <div className='bg-gray-100 pb-16'>
        <div className='m-auto max-w-6xl pt-12 bg-gray-100'>
            <h1 className='text-5xl font-semibold'><span className='text-[#0146b1]'>Последни</span> Обяви</h1>
        </div>
        
        <div className='m-auto max-w-6xl mt-16 flex flex-row items-center'>
            <div className='flex flex-col'>
                <div className='flex flex-row items-center border-l-4 border-gray-300 p-2 hover:opacity-80 trasition duration-100 cursor-pointer'>
                    <h3>Product Managment</h3> 
                    <span className='ml-2 px-2 py-1 bg-blue-100 rounded-xl'>34</span>
                </div>

                <div className='flex flex-row items-center border-l-4 border-[#0146b1] p-2 hover:opacity-80 trasition duration-100 cursor-pointer'>
                    <h3>Design</h3> 
                    <span className='ml-2 px-2 py-1 bg-gray-200 rounded-xl'>34</span>
                </div>

                <div className='flex flex-row items-center border-l-4 border-gray-300 p-2 hover:opacity-80 trasition duration-100 cursor-pointer'>
                    <h3>Marketing</h3> 
                    <span className='ml-2 px-2 py-1 bg-red-100 rounded-xl'>34</span>
                </div>

                <div className='flex flex-row items-center border-l-4 border-gray-300 p-2 hover:opacity-80 trasition duration-100 cursor-pointer'>
                    <h3>Customer Service</h3> 
                    <span className='ml-2 px-2 py-1 bg-green-100 rounded-xl'>34</span>
                </div>
            </div>

            <div className='ml-10 flex flex-row items-center justify-between'>

                <div className='bg-[#0852bf] mx-10 flex-col justify-center items-center p-6 rounded-2xl cursor-pointer transition duration-200 hover:scale-105 hover:shadow-xl'>
                    <h2 className='text-2xl text-white font-semibold'>Product Designer</h2>
                    
                    <div className='mt-2'>
                        <span className='bg-[#16368d] text-sm rounded-xl text-white px-2 py-1 mr-2'>Full Time</span>
                        <span className='bg-[#16368d] text-sm rounded-xl text-white px-2 py-1 mr-2'>Product</span>
                    </div>
                    
                    <h2 className='mt-5 text-xl font-semibold text-[#b3fd49]'>1000-1500 USD</h2>
                    
                    <div className='flex flex-row justify-between items-center mt-16 border-t boreder-gray-100 pt-2'>
                        
                        <div class="flex flex-row justify-center items-center">
                          <a href="">
                                <img className='rounded-full w-10 h-10' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
                          </a>
                          <div>
                            <a href="" className='text-white text-sm ml-0.5'>Colorblock</a>
                          </div>
                        </div>

                        <div>
                            <a href='' className='bg-[#b3fd49] transition duration-200 hover:scale-105 text-sm px-1 py-0.5 rounded-xl flex flex-row item-center justify-between'>
                                Свържи се
                            </a>
                        </div>

                    </div>
                </div>

                <div className='bg-white mx-6 flex-col justify-center items-center p-6 rounded-2xl cursor-pointer transition duration-200 hover:scale-105 hover:shadow-xl'>
                    <h2 className='text-2xl text-black font-semibold'>Product Designer</h2>
                    
                    <div className='mt-2'>
                        <span className='bg-[#16368d] text-sm rounded-xl text-white px-2 py-1 mr-2'>Full Time</span>
                        <span className='bg-[#16368d] text-sm rounded-xl text-white px-2 py-1 mr-2'>Product</span>
                    </div>
                    
                    <h2 className='mt-5 text-xl font-semibold text-[#0146b1]'>1000-1500 USD</h2>
                    
                    <div className='flex flex-row justify-between items-center mt-16 border-t boreder-gray-100 pt-2'>
                        
                        <div class="flex flex-row justify-center items-center">
                          <a href="">
                                <img className='rounded-full w-10 h-10' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
                          </a>
                          <div>
                            <a href="" className='text-[#0146b1] text-sm ml-0.5'>Colorblock</a>
                          </div>
                        </div>

                        <div>
                            <a href='' className='bg-[#0146b1] text-white transition duration-200 hover:scale-105 text-sm px-1 py-0.5 rounded-xl flex flex-row item-center justify-between'>
                                Свържи се
                            </a>
                        </div>

                    </div>
                </div>

                <div className='bg-white mx-6 flex-col justify-center items-center p-6 rounded-2xl cursor-pointer transition duration-200 hover:scale-105 hover:shadow-xl'>
                    <h2 className='text-2xl text-black font-semibold'>Product Designer</h2>
                    
                    <div className='mt-2'>
                        <span className='bg-[#16368d] text-sm rounded-xl text-white px-2 py-1 mr-2'>Full Time</span>
                        <span className='bg-[#16368d] text-sm rounded-xl text-white px-2 py-1 mr-2'>Product</span>
                    </div>
                    
                    <h2 className='mt-5 text-xl font-semibold text-[#0146b1]'>1000-1500 USD</h2>
                    
                    <div className='flex flex-row justify-between items-center mt-16 border-t boreder-gray-100 pt-2'>
                        
                        <div class="flex flex-row justify-center items-center">
                          <a href="">
                                <img className='rounded-full w-10 h-10' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
                          </a>
                          <div>
                            <a href="" className='text-[#0146b1] text-sm ml-0.5'>Colorblock</a>
                          </div>
                        </div>

                        <div>
                            <a href='' className='bg-[#0146b1] text-white transition duration-200 hover:scale-105 text-sm px-1 py-0.5 rounded-xl flex flex-row item-center justify-between'>
                                Свържи се
                            </a>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default LatestJobs
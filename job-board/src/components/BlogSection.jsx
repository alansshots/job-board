import React from 'react'

const BlogSection = () => {
  return (
    <div id='BlogSection'>
        <div className='bg-gray-100 pb-16'>
            <div className='m-auto max-w-6xl pt-12 bg-gray-100'>
                <h1 className='text-5xl font-semibold'><span className='text-[#0146b1]'>Истории</span> от нашия блог</h1>
            </div>

            <div className='m-auto max-w-6xl mt-10 flex flex-row'>
                <article className="mx-5 animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-[length:400%_400%] p-0.5 shadow-md transition [animation-duration:_6s] hover:shadow-xl hover:scale-105">
                    <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
                        <time dateTime="2022-10-10" className="block text-xs text-gray-500">
                        10/08/2023
                        </time>

                        <a href="#" className='hover:underline'>
                        <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, doloremque.
                        </h3>
                        </a>

                        <div className="mt-4 flex flex-wrap gap-1">
                        <span className="whitespace-nowrap rounded-full bg-[#0852bf] px-2.5 py-0.5 text-xs text-[#b3fd49]" >
                            хаштаг
                        </span>

                        <span className="whitespace-nowrap rounded-full bg-[#0852bf] px-2.5 py-0.5 text-xs text-[#b3fd49]" >
                            хаштаг
                        </span>
                        </div>
                    </div>
                </article>

                <article className="mx-5 animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-[length:400%_400%] p-0.5 shadow-md transition [animation-duration:_6s] hover:shadow-xl hover:scale-105">
                    <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
                        <time dateTime="2022-10-10" className="block text-xs text-gray-500">
                        15/03/2023
                        </time>

                        <a href="#" className='hover:underline'>
                        <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                            Lorem ipsum dolor sit amet consectetur adipisicing.
                        </h3>
                        </a>

                        <div className="mt-4 flex flex-wrap gap-1">
                        <span className="whitespace-nowrap rounded-full bg-[#0852bf] px-2.5 py-0.5 text-xs text-[#b3fd49]" >
                            хаштаг
                        </span>

                        <span className="whitespace-nowrap rounded-full bg-[#0852bf] px-2.5 py-0.5 text-xs text-[#b3fd49]" >
                            хаштаг
                        </span>
                        </div>
                    </div>
                </article>

                <article className="mx-5 animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-[length:400%_400%] p-0.5 shadow-md transition [animation-duration:_6s] hover:shadow-xl hover:scale-105">
                    <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
                        <time dateTime="2022-10-10" className="block text-xs text-gray-500">
                        07/12/2023
                        </time>

                        <a href="#" className='hover:underline'>
                        <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                            Lorem ipsum dolor, sit amet consectetur adipisicing.
                        </h3>
                        </a>

                        <div className="mt-4 flex flex-wrap gap-1">
                        <span className="whitespace-nowrap rounded-full bg-[#0852bf] px-2.5 py-0.5 text-xs text-[#b3fd49]" >
                            хаштаг
                        </span>

                        <span className="whitespace-nowrap rounded-full bg-[#0852bf] px-2.5 py-0.5 text-xs text-[#b3fd49]" >
                            хаштаг
                        </span>
                        </div>
                    </div>
                </article>

            </div>
        </div>
    </div>
  )
}

export default BlogSection
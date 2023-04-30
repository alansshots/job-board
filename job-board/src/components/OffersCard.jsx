import React from 'react'

const OffersCard = () => {
  return (   
    <article class="my-4 rounded-xl border-2 border-gray-100 bg-white shadow-sm trasition duration-200 hover:scale-[101%] hover:shadow-md">
        <div class="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
          <a href="#" class="block shrink-0"> 
            <img src="" class="h-14 w-14 rounded-lg object-cover"/>
          </a>

            <div>
              <h3 class="font-medium sm:text-lg">
                <a href="#" class="hover:underline">
                  Администрация в хотел - Сливен
                </a>
              </h3>

              <p class="line-clamp-2 text-sm text-gray-700">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus,
                accusantium temporibus iure delectus ut totam natus nesciunt ex?
                Ducimus, enim.
              </p>

              <div class="mt-2 sm:flex sm:items-center sm:gap-2">
                <span class="whitespace-nowrap rounded-full bg-[#0852bf] px-2.5 py-0.5 text-xs text-[#b3fd49]" >
                  1000-1500лв
                </span>

                <span class="whitespace-nowrap rounded-full bg-[#0852bf] px-2.5 py-0.5 text-xs text-white" >
                  3-месеца
                </span>

                <span class="whitespace-nowrap rounded-full bg-[#0852bf] px-2.5 py-0.5 text-xs text-white" >
                  без опит
                </span>


              <span class="hidden sm:block" aria-hidden="true">&middot;</span>

              <p class="hidden sm:block sm:text-xs sm:text-gray-500">
                  Публикувано от 
                <a href="#" class=" ml-0.5 font-medium underline hover:text-gray-700">
                  Hotel Festa
                </a>
              </p>            
          </div>
        </div>
      </div>
      
      <div class="flex justify-end">
        <button class="items-center text-white bg-[#0852bf] transition ease-in duration-200 hover: px-2 py-2 text-sm cursor-pointer mb-5 mr-5 rounded-xl font-semibold hover:shadow-xl">
          Свържи се
        </button>
      </div>
    </article>
  )
}

export default OffersCard
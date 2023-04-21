import React from 'react'

const OffersCard = () => {
  return (   
    <article class="my-4 rounded-xl border-2 border-gray-100 bg-white">
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
                <div class="flex items-center gap-1 text-gray-500">
                  <span>$</span>
                <p class="text-xs">1000 / 1500 лв</p>
              </div>

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
        <button class="items-center bg-yellow-300 hover:bg-yellow-400 px-2 py-2 text-sm cursor-pointer mb-5 mr-5 rounded-xl font-semibold">
          Свържи се
        </button>
      </div>
    </article>
  )
}

export default OffersCard
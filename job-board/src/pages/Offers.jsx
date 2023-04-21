import React from 'react'

const Offers = () => {
  return (
    <div id="Offers" className='flex flex-row justify-center items-start m-auto max-w-4xl'>
      <div className='filters border-2 border-black-500 p-3 mx-2 rounded-xl w-1/2'>

        <div class="space-y-2">
          <details
            class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary
              class="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
            >
              <span class="text-sm font-medium"> Населено място </span>

              <span class="transition group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>

            <div class="border-t border-gray-200 bg-white">
              <header class="flex items-center justify-between p-4">
                <span class="text-sm text-gray-700"> 0 Избрани </span>

                <button
                  type="button"
                  class="text-sm text-gray-900 underline underline-offset-4"
                >
                  Нулиране
                </button>
              </header>

              <ul class="space-y-1 border-t border-gray-200 p-4">
                <li>
                  <label for="FilterInStock" class="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="FilterInStock"
                      class="h-5 w-5 rounded border-gray-300"
                    />

                    <span class="text-sm font-medium text-gray-700">
                      In Stock (5+)
                    </span>
                  </label>
                </li>

                <li>
                  <label for="FilterPreOrder" class="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="FilterPreOrder"
                      class="h-5 w-5 rounded border-gray-300"
                    />

                    <span class="text-sm font-medium text-gray-700">
                      Pre Order (3+)
                    </span>
                  </label>
                </li>

                <li>
                  <label for="FilterOutOfStock" class="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="FilterOutOfStock"
                      class="h-5 w-5 rounded border-gray-300"
                    />

                    <span class="text-sm font-medium text-gray-700">
                      Out of Stock (10+)
                    </span>
                  </label>
                </li>
              </ul>
            </div>
          </details>

          <details
            class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary
              class="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
            >
              <span class="text-sm font-medium"> Заплата </span>

              <span class="transition group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>

            <div class="border-t border-gray-200 bg-white">

              <div class="border-t border-gray-200 p-4">
                <div class="flex justify-between gap-4">
                  <label for="FilterPriceFrom" class="flex items-center gap-2">
                    <span class="text-sm text-gray-600">$</span>

                    <input
                      type="number"
                      id="FilterPriceFrom"
                      placeholder="From"
                      class="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                  </label>

                  <label for="FilterPriceTo" class="flex items-center gap-2">
                    <span class="text-sm text-gray-600">$</span>

                    <input
                      type="number"
                      id="FilterPriceTo"
                      placeholder="To"
                      class="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                  </label>
                </div>
              </div>
            </div>
          </details>
        </div>

      </div>
      <div className='offers border-2 border-black-500 p-3 mx-2 rounded-xl'>
      
      <article class="rounded-xl border-2 border-gray-100 bg-white">
        <div class="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
        <a href="#" class="block shrink-0"> <img 
          src=""
          class="h-14 w-14 rounded-lg object-cover"/>
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
    <button class="items-center bg-yellow-300 hover:bg-yellow-400 px-2 py-2 text-sm cursor-pointer m-5 rounded-xl font-semibold">
      Свържи се
    </button>
  </div>
</article>

      </div>
    </div>
  )
}

export default Offers
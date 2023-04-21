import React from 'react'
import { ChevronDown } from 'react-feather';

const Filters = () => {
  return (
    <div class="space-y-2">
          <details class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
            <summary class="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
              <span class="text-sm font-medium"> Населено място </span>
              <ChevronDown/>
            </summary>

            <div class="border-t border-gray-200 bg-white">
              <header class="flex items-center justify-between p-4">
                <span class="text-sm text-gray-700"> 0 Избрани </span>

                <button type="button" class="text-sm text-gray-900 underline underline-offset-4">
                  Нулиране
                </button>
              </header>

              <ul class="space-y-1 border-t border-gray-200 p-4">
                <li>
                  <label for="FilterInStock" class="inline-flex items-center gap-2">
                    <input type="checkbox" id="FilterInStock" class="h-5 w-5 rounded border-gray-300" />
                    <span class="text-sm font-medium text-gray-700">
                      In Stock (5+)
                    </span>
                  </label>
                </li>

                <li>
                  <label for="FilterPreOrder" class="inline-flex items-center gap-2">
                    <input type="checkbox" id="FilterPreOrder" class="h-5 w-5 rounded border-gray-300"/>
                    <span class="text-sm font-medium text-gray-700">
                      Pre Order (3+)
                    </span>
                  </label>
                </li>

                <li>
                  <label for="FilterOutOfStock" class="inline-flex items-center gap-2">
                    <input type="checkbox" id="FilterOutOfStock" class="h-5 w-5 rounded border-gray-300" />
                    <span class="text-sm font-medium text-gray-700">
                      Out of Stock (10+)
                    </span>
                  </label>
                </li>
              </ul>
            </div>
          </details>

          <details class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
            <summary class="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
              <span class="text-sm font-medium"> Бранш </span>
              <ChevronDown/>
            </summary>

            <div class="border-t border-gray-200 bg-white">
              <header class="flex items-center justify-between p-4">
                <span class="text-sm text-gray-700"> 0 Избрани </span>

                <button type="button" class="text-sm text-gray-900 underline underline-offset-4">
                  Нулиране
                </button>
              </header>

              <ul class="space-y-1 border-t border-gray-200 p-4">
                <li>
                  <label for="FilterInStock" class="inline-flex items-center gap-2">
                    <input type="checkbox" id="FilterInStock" class="h-5 w-5 rounded border-gray-300" />
                    <span class="text-sm font-medium text-gray-700">
                      Хотел
                    </span>
                  </label>
                </li>

                <li>
                  <label for="FilterPreOrder" class="inline-flex items-center gap-2">
                    <input type="checkbox" id="FilterPreOrder" class="h-5 w-5 rounded border-gray-300"/>
                    <span class="text-sm font-medium text-gray-700">
                      Ресторант
                    </span>
                  </label>
                </li>

                <li>
                  <label for="FilterOutOfStock" class="inline-flex items-center gap-2">
                    <input type="checkbox" id="FilterOutOfStock" class="h-5 w-5 rounded border-gray-300" />
                    <span class="text-sm font-medium text-gray-700">
                      Магазин
                    </span>
                  </label>
                </li>
              </ul>
            </div>
          </details>

          <details class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden" >
            <summary class="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
              <span class="text-sm font-medium"> Заплата </span>
              <ChevronDown/>
            </summary>

            <div class="border-t border-gray-200 bg-white">

              <div class="border-t border-gray-200 p-4">
                <div class="flex justify-between gap-4">
                  <label for="FilterPriceFrom" class="flex items-center gap-2">
                    <span class="text-sm text-gray-600">$</span>

                    <input type="number" id="FilterPriceFrom" placeholder="От" class="w-full rounded-md border-gray-200 shadow-sm sm:text-sm" />
                  </label>

                  <label for="FilterPriceTo" class="flex items-center gap-2">
                    <span class="text-sm text-gray-600">$</span>

                    <input type="number" id="FilterPriceTo" placeholder="До" class="w-full rounded-md border-gray-200 shadow-sm sm:text-sm" />
                  </label>
                </div>
              </div>
            </div>
          </details>
        </div>
  )
}

export default Filters
import React from 'react'
import { ChevronDown, MapPin, Briefcase, DollarSign, XCircle, CheckCircle } from 'react-feather';


const Filters = () => {
  return (
    <div id="Filters">
     <div className="flex flex-col justify-between bg-white rounded-xl mt-4">
  <div className="">
    <nav aria-label="Main Nav" className=" flex flex-col space-y-1">

      <details className="group duration-100">
        <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
          <div className="flex items-center gap-2">
            <MapPin className='w-4 h-4'/>
            <span className="text-md font-semibold"> Локация </span>
          </div>
          <span className="shrink-0 transition duration-300 group-open:-rotate-180">
          <ChevronDown/>
          </span>
        </summary>

        <nav aria-label="Location" className="mt-2 flex flex-col px-4 trasition duration-100">
          <ul class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700" aria-labelledby="dropdownSearchButton">
            <li>
              <div class="flex items-center p-2 rounded hover:bg-gray-100">
                <input id="checkbox-item-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded " />
                <label for="checkbox-item-1" class="w-full ml-2 text-sm font-medium text-gray-900 rounded">Бургас</label>
              </div>
            </li>
            <li>
              <div class="flex items-center p-2 rounded hover:bg-gray-100">
                <input id="checkbox-item-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded " />
                <label for="checkbox-item-1" class="w-full ml-2 text-sm font-medium text-gray-900 rounded">Поморие</label>
              </div>
            </li>
            <li>
              <div class="flex items-center p-2 rounded hover:bg-gray-100">
                <input id="checkbox-item-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded " />
                <label for="checkbox-item-1" class="w-full ml-2 text-sm font-medium text-gray-900 rounded">Сл. Бряг</label>
              </div>
            </li>
            <li>
              <div class="flex items-center p-2 rounded hover:bg-gray-100">
                <input id="checkbox-item-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded " />
                <label for="checkbox-item-1" class="w-full ml-2 text-sm font-medium text-gray-900 rounded">Лозенец</label>
              </div>
            </li>
            <li>
              <div class="flex items-center p-2 rounded hover:bg-gray-100">
                <input id="checkbox-item-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded " />
                <label for="checkbox-item-1" class="w-full ml-2 text-sm font-medium text-gray-900 rounded">Созопол</label>
              </div>
            </li>
            <li>
              <div class="flex items-center p-2 rounded hover:bg-gray-100">
                <input id="checkbox-item-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded " />
                <label for="checkbox-item-1" class="w-full ml-2 text-sm font-medium text-gray-900 rounded">Варна</label>
              </div>
            </li>
            <li>
              <div class="flex items-center p-2 rounded hover:bg-gray-100">
                <input id="checkbox-item-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded " />
                <label for="checkbox-item-1" class="w-full ml-2 text-sm font-medium text-gray-900 rounded">Несебър</label>
              </div>
            </li>
          </ul>
        </nav>
      </details>

      <details className="group duration-100">
        <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
          <div className="flex items-center gap-2">
            <Briefcase className='w-4 h-4'/>
            <span className="text-md font-semibold">Бранш </span>
          </div>
          <span className="shrink-0 transition duration-300 group-open:-rotate-180">
          <ChevronDown/>
          </span>
        </summary>

        <nav aria-label="Location" className="mt-2 flex flex-col px-4 trasition duration-100">
          <ul class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700" aria-labelledby="dropdownSearchButton">
            <li>
              <div class="flex items-center p-2 rounded hover:bg-gray-100">
                <input id="checkbox-item-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded " />
                <label for="checkbox-item-1" class="w-full ml-2 text-sm font-medium text-gray-900 rounded">Хотел</label>
              </div>
            </li>
            <li>
              <div class="flex items-center p-2 rounded hover:bg-gray-100">
                <input id="checkbox-item-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded " />
                <label for="checkbox-item-1" class="w-full ml-2 text-sm font-medium text-gray-900 rounded">Ресторант</label>
              </div>
            </li>
            <li>
              <div class="flex items-center p-2 rounded hover:bg-gray-100">
                <input id="checkbox-item-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded " />
                <label for="checkbox-item-1" class="w-full ml-2 text-sm font-medium text-gray-900 rounded">Магазин</label>
              </div>
            </li>
            <li>
              <div class="flex items-center p-2 rounded hover:bg-gray-100">
                <input id="checkbox-item-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded " />
                <label for="checkbox-item-1" class="w-full ml-2 text-sm font-medium text-gray-900 rounded">Спасител</label>
              </div>
            </li>
            <li>
              <div class="flex items-center p-2 rounded hover:bg-gray-100">
                <input id="checkbox-item-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded " />
                <label for="checkbox-item-1" class="w-full ml-2 text-sm font-medium text-gray-900 rounded">Аниматор</label>
              </div>
            </li>
            <li>
              <div class="flex items-center p-2 rounded hover:bg-gray-100">
                <input id="checkbox-item-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded " />
                <label for="checkbox-item-1" class="w-full ml-2 text-sm font-medium text-gray-900 rounded">Нещо</label>
              </div>
            </li>
            <li>
              <div class="flex items-center p-2 rounded hover:bg-gray-100">
                <input id="checkbox-item-1" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded " />
                <label for="checkbox-item-1" class="w-full ml-2 text-sm font-medium text-gray-900 rounded">Нещо #2</label>
              </div>
            </li>
          </ul>
        </nav>
      </details>

      <details className="group duration-100">
        <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
          <div className="flex items-center gap-2">
            <DollarSign className='w-6 h-6'/>
            <span className="text-md font-semibold"> Само обяви с заплати </span>
          </div>
          <label for="AcceptConditions" class="relative h-6 w-14 cursor-pointer">
            <input
              type="checkbox"
              id="AcceptConditions"
              class="peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden"
            />

            <span class="absolute inset-y-0 start-0 z-10 m-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-white text-gray-400 transition-all peer-checked:start-6 peer-checked:text-green-600">
              <XCircle data-unchecked-icon/>
              <CheckCircle data-checked-icon class="hidden h-4 w-4"/>
            </span>
            
            <span class="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-green-500"></span>
          </label>
        </summary>
      </details>

    </nav>
  </div>
</div>
    </div>
  )
}

export default Filters


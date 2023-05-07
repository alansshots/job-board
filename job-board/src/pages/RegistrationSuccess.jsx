import React from 'react'
import { XCircle, CheckCircle } from 'react-feather';

const RegistrationSuccess = () => {
  return (
    <>
        <div role="alert" class="duration-200  rounded-xl border border-gray-100 bg-white p-4 shadow-xl max-w-xl absolute top-0">
        <div class="flex items-start gap-4">
            <span class="text-green-600">
            <CheckCircle/>
            </span>

            <div class="flex-1">
            <strong class="block font-medium text-gray-900"> Успешна регистрация </strong>

            <p class="mt-1 text-sm text-gray-700">
                Моля потвърдете вашия имейл.
            </p>
            </div>

            <button class="text-gray-500 transition hover:text-gray-600">
            <span class="sr-only">Dismiss popup</span>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
            >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
                />
            </svg>
            </button>
        </div>
        </div>
    </>
  )
}

export default RegistrationSuccess
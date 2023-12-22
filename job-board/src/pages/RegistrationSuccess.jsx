import React from 'react'
import { XCircle, CheckCircle } from 'react-feather';

const RegistrationSuccess = () => {
  return (
    <>
        <div role="alert" className="sticky z-10 duration-200 rounded-xl border border-gray-100 bg-white p-4 shadow-xl max-w-xl absolute top-0">
        <div className="flex items-start gap-4">
            <span className="text-green-600">
            <CheckCircle/>
            </span>

            <div className="flex-1">
            <strong className="block font-medium text-gray-900"> Успешна регистрация </strong>

            <p className="mt-1 text-sm text-gray-700">
                Моля потвърдете вашия имейл.
            </p>
            </div>

            <button className="text-gray-500 transition hover:text-gray-600">
            <span className="sr-only">Dismiss popup</span>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
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
import React from 'react'
import { XCircle, CheckCircle } from 'react-feather';

const RegistrationFailure = () => {
  return (
    <>
    <div role="alert" className="sticky z-10 rounded-xl border border-gray-100 bg-white p-4 shadow-xl w-4/12 absolute top-0">
        <div className="flex items-start gap-4">
            <span className="text-red-600">
            <XCircle/>
            </span>

            <div className="flex-1">
            <strong className="block font-medium text-gray-900"> Неуспешна регистрация. </strong>

            <p className="mt-1 text-sm text-gray-700">
                Моля опитайте отново.
            </p>
            </div>

        </div>
        </div>
    </>
  )
}

export default RegistrationFailure
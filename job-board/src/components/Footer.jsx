import React from 'react'
import { Instagram, Facebook } from 'react-feather'

const Footer = () => {
  return (
    <div>
        <footer aria-label="Site Footer" className="bg-gray-100">
            <div className="max-w-4xl px-4 pt-16 pb-8 mx-auto sm:px-6 lg:px-8 lg:pt-4">
                <div className="pt-8 mt-16 border-t border-gray-300 sm:flex sm:items-center sm:justify-between lg:mt-16">
                <nav aria-label="Footer Navigation - Support">
                    <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
                    <li>
                        <a href="#" className="text-gray-500 transition hover:opacity-75">
                        Условия за ползване
                        </a>
                    </li>

                    <li>
                        <a href="#" className="text-gray-500 transition hover:opacity-75">
                        Политика за защита на личните данни
                        </a>
                    </li>

                    <li>
                        <a href="#" className="text-gray-500 transition hover:opacity-75">
                         Други
                        </a>
                    </li>
                    </ul>
                </nav>

                <ul className="flex justify-center gap-6 mt-8 sm:mt-0 lg:justify-end">
                    <li>
                    <a
                        href="/"
                        rel="noreferrer"
                        target="_blank"
                        className="text-gray-700 transition hover:opacity-75"
                    >
                        <span className="sr-only">Facebook</span>
                        <Facebook/>  
                    </a>
                    </li>

                    <li>
                    <a
                        href="/"
                        rel="noreferrer"
                        target="_blank"
                        className="text-gray-700 transition hover:opacity-75" >
                        <span className="sr-only">Instagram</span>
                        <Instagram/>
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            </footer>

    </div>
  )
}

export default Footer
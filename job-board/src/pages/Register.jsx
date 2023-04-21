import React from 'react'

const Register = () => {
  return (
    <div id="Register">

        <section>
          <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">

              <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                <form action="" class="space-y-4">
                  <div>
                    <label class="sr-only" for="name">Име</label>
                    <input
                      class="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Име"
                      type="text"
                      id="name"
                    />
                  </div>

                  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label class="sr-only" for="email">Емейл</label>
                      <input
                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Имейл"
                        type="email"
                        id="email"
                      />
                    </div>

                    <div>
                      <label class="sr-only" for="phone">Телефон</label>
                      <input
                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Телефон"
                        type="tel"
                        id="phone"
                      />
                    </div>
                  </div>

                  <div>
                    <label class="sr-only" for="message">Описание</label>

                    <textarea
                      class="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Описание"
                      rows="8"
                      id="message"
                    ></textarea>
                  </div>

                  <div class="mt-4">
                      <button className="flex items-center px-4 py-1  transition ease-in duration-200 uppercase text-sm rounded-full bg-gray-800 hover:bg-white text-white hover:text-gray-800 border-2 border-gray-900 focus:outline-none">          
                         Регистрация
                      </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

    </div>
  )
}

export default Register
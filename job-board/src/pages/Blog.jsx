import React from 'react'
import { useQuery, gql } from "@apollo/client";

import Navbar from '../components/Navbar'

const BLOGS_QUERY = gql`
{
posts {
  id    
  content {
        html
       }
  title
  tags
  summary
  slug
  publishedBy {
    name
    picture
    publishedAt
  }
}
}
`;

const Blog = () => {

  const { data, loading, error} = useQuery(BLOGS_QUERY);
  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>
  return (
    <div id="Blog">
        <Navbar/>
        <div className='mx-auto flex max-w-4xl items-center justify-between p-4'>
          <h2 className='text-3xl font-semibold'>Последни постове</h2>
        </div>

        <div className='mx-auto flex max-w-4xl items-center justify-between p-4'>
          
        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-1">
        {data.posts.map((post) => (

          <article class="flex bg-white transition hover:shadow-xl">
            <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
              <time datetime="2022-10-10" class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900">
                <span>2023</span>
                <span class="w-px flex-1 bg-gray-900/10"></span>
                <span>Януари 10</span>
              </time>
            </div>
            
            <div class="hidden sm:block sm:basis-56">
              <img
                alt="Guitar"
                src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                class="aspect-square h-full w-full object-cover"
              />
            </div>

            <div class="flex flex-1 flex-col justify-between">
              <div class="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                <a href="#">
                  <h3 class="font-bold uppercase text-gray-900">
                    {post.title}
                  </h3>
                </a>

                <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                  {post.summary}
                </p>
              </div>

              <div class="sm:flex sm:items-end sm:justify-end">
                <a href="#" class="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400">
                  Прочети
                </a>
              </div>
            </div>
          </article>
          ))}
        </div>

        </div>
    </div>
  )
}

export default Blog
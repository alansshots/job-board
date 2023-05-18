import React from 'react'
import { useQuery, gql } from "@apollo/client";

const BLOGS_QUERY = gql`
{
posts {
  date
  id    
  coverPhoto {
    url
    id
  }
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
  if (loading) return (
    <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
      <div className="border-t-transparent border-solid animate-spin  rounded-full border-[#0146b1] border-8 h-64 w-64"></div>
    </div>
  );
  if (error) return <pre>{error.message}</pre>
  return (
    <div id="Blog">
        {/* <div className='mx-auto flex max-w-4xl items-center justify-between p-4'>
          <h2 className='text-3xl font-semibold'>Последни постове</h2>
        </div> */}
        <div className='m-auto max-w-4xl pt-12'>
            <h1 className='text-5xl font-semibold'><span className='text-[#0146b1]'>Истории</span> от нашия блог</h1>
        </div>

        <div className='mx-auto flex max-w-4xl items-center justify-between p-4'>
          
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-1">
        {/* {data.posts.map((post) => (

          <article className="flex bg-white transition shadow-md hover:shadow-xl" key={post.coverPhoto.id}>
            <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
              <time dateTime={post.date} assName="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900">
                <span></span>
                <span className="w-px flex-1 bg-gray-900/10"></span>
                <span>{post.date}</span>
              </time>
            </div>
            
            <div className="hidden sm:block sm:basis-56">
              <img
                key={post.coverPhoto.id}
                src={post.coverPhoto.url}
                className="aspect-square h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between">
              <div className="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                <a href="#">
                  <h3 className="font-bold uppercase text-gray-900">
                    {post.title}
                  </h3>
                </a>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                  {post.summary}
                </p>
              </div>

              <div className="sm:flex sm:items-end sm:justify-end">
                <a href={"/blog/" + post.slug} className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400">
                  Прочети
                </a>
              </div>
            </div>
          </article>
          ))} */}

        </div>

        <div className='m-auto mt-10 flex flex-row flex-wrap'>
                <article class="w-1/3 mx-5 animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-[length:400%_400%] p-0.5 shadow-md transition [animation-duration:_6s] hover:shadow-xl hover:scale-105">
                    <div class="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
                        <time datetime="2022-10-10" class="block text-xs text-gray-500">
                        10/08/2023
                        </time>

                        <a href="#" className='hover:underline'>
                        <h3 class="mt-0.5 text-lg font-medium text-gray-900">
                            Lorem ipsum dolor.
                        </h3>
                        </a>

                        <div class="mt-4 flex flex-wrap gap-1">
                        <span class="whitespace-nowrap rounded-full bg-[#0852bf] px-2.5 py-0.5 text-xs text-[#b3fd49]" >
                            хаштаг
                        </span>

                        <span class="whitespace-nowrap rounded-full bg-[#0852bf] px-2.5 py-0.5 text-xs text-[#b3fd49]" >
                            хаштаг
                        </span>
                        </div>
                    </div>
                </article>

                <article class="w-1/3 mx-5 animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-[length:400%_400%] p-0.5 shadow-md transition [animation-duration:_6s] hover:shadow-xl hover:scale-105">
                    <div class="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
                        <time datetime="2022-10-10" class="block text-xs text-gray-500">
                        15/03/2023
                        </time>

                        <a href="#" className='hover:underline'>
                        <h3 class="mt-0.5 text-lg font-medium text-gray-900">
                            Lorem ipsum dolor
                        </h3>
                        </a>

                        <div class="mt-4 flex flex-wrap gap-1">
                        <span class="whitespace-nowrap rounded-full bg-[#0852bf] px-2.5 py-0.5 text-xs text-[#b3fd49]" >
                            хаштаг
                        </span>

                        <span class="whitespace-nowrap rounded-full bg-[#0852bf] px-2.5 py-0.5 text-xs text-[#b3fd49]" >
                            хаштаг
                        </span>
                        </div>
                    </div>
                </article>

                <article class="w-1/3 mx-5 animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-[length:400%_400%] p-0.5 shadow-md transition [animation-duration:_6s] hover:shadow-xl hover:scale-105">
                    <div class="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
                        <time datetime="2022-10-10" class="block text-xs text-gray-500">
                        07/12/2023
                        </time>

                        <a href="#" className='hover:underline'>
                        <h3 class="mt-0.5 text-lg font-medium text-gray-900">
                            Lorem ipsum dolor
                        </h3>
                        </a>

                        <div class="mt-4 flex flex-wrap gap-1">
                        <span class="whitespace-nowrap rounded-full bg-[#0852bf] px-2.5 py-0.5 text-xs text-[#b3fd49]" >
                            хаштаг
                        </span>

                        <span class="whitespace-nowrap rounded-full bg-[#0852bf] px-2.5 py-0.5 text-xs text-[#b3fd49]" >
                            хаштаг
                        </span>
                        </div>
                    </div>
                </article>

            </div>

        </div>
    </div>
  )
}

export default Blog
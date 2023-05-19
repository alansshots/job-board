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
        <div className='m-auto max-w-5xl pt-12'>
            <h1 className='text-5xl font-semibold'><span className='text-[#0146b1]'>Истории</span> от нашия блог</h1>
        </div>

        <div className='mx-auto flex max-w-6xl items-center p-4'>
        <div className='m-auto w-full mt-10 flex flex-row items-center justify-center flex-wrap'>
              {data.posts.map((post) => (
                <article key={post.coverPhoto.id} class="w-1/4 mx-5 animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-[length:400%_400%] p-0.5 shadow-md transition [animation-duration:_6s] hover:shadow-xl hover:scale-105">
                    <img src={post.coverPhoto.url} className="rounded-t-[10px] bg-white sm:p-0.5"/>
                    <div class="rounded-b-[10px] bg-white p-4 !pt-5 sm:p-6">
                        <time datetime="2022-10-10" class="block text-xs text-gray-500">
                          {post.date}
                        </time>

                        <a href={"/blog/" + post.slug} className='hover:underline'>
                        <h3 class="mt-0.5 text-lg font-medium text-gray-900">
                          {post.title}
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
              ))}

            </div>

        </div>
    </div>
  )
}

export default Blog
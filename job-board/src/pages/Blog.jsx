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
      <div className="border-t-transparent border-solid animate-spin  rounded-full border-yellow-400 border-8 h-64 w-64"></div>
    </div>
  );
  if (error) return <pre>{error.message}</pre>
  return (
    <div id="Blog">
        <div className='mx-auto flex max-w-4xl items-center justify-between p-4'>
          <h2 className='text-3xl font-semibold'>Последни постове</h2>
        </div>

        <div className='mx-auto flex max-w-4xl items-center justify-between p-4'>
          
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-1">
        {data.posts.map((post) => (

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
          ))}
        </div>

        </div>
    </div>
  )
}

export default Blog
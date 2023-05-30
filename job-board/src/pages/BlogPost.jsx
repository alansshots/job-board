import React from 'react'

import { useQuery, gql } from "@apollo/client";
import { defaultFieldResolver } from 'graphql';
const { pathname } = window.location;
const paths = pathname.split("/").filter(entry => entry !== "");
const lastPath = paths[paths.length - 1];

const BLOG_QUERY = gql`
{
    post(where: {slug: "${lastPath}"}) {
        id
        tags
        summary
        date
        title
        publishedBy {
        name
        picture
        publishedAt
        }
        coverPhoto {
        url
        }
        content {
        html
        }
    }
}
`;

const BlogPost = () => {
  const { data, loading, error} = useQuery(BLOG_QUERY);
  if (loading) return (
    <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
      <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-64 w-64"></div>
    </div>
  );
  if (error) return <pre>{error.message}</pre>
  return (
    <div className='m-auto max-w-3xl'>
      <div>
        <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-1">
          <img src={data.post.coverPhoto.url} className="max-h-60 w-full object-cover"/>
        </section>

            <h1 className='text-3xl font-semibold my-5'>{data.post.title}</h1>
            <div className='flex flex-row items-center justify-left'>

              <div className="flex-row gap-4 flex justify-center items-center">
                <div className="flex-shrink-0">
                    <a href="#" className="relative block">
                        <img alt="profil" src={data.post.publishedBy.picture} className="mx-auto object-cover rounded-full h-12 w-12 "/>
                    </a>
                </div>
                <div className=" flex flex-col">
                    <span className="text-sm font-medium text-gray-600">
                        {data.post.publishedBy.name}
                    </span>
                    <span className="text-xs text-gray-400">
                        {data.post.date}
                    </span>
                </div>
            </div>
            </div>
            
        </div>
        <div className='mt-5' dangerouslySetInnerHTML={{__html: data.post.content.html}}>
        </div>
    </div>
  )
}

export default BlogPost
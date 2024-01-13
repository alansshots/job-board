import React from 'react'
import { useState, useEffect } from 'react';
import { useQuery, gql } from "@apollo/client";

const BlogPost = () => {

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

  const { data, loading, error } = useQuery(BLOG_QUERY);

  if (loading) {
    return (
      <div className="loading-spinner">
        {/* You can use a loading spinner here */}
      </div>
    );
  }

  if (error ) {
    console.error("Error fetching data:", error);
    return <pre>{error.message}</pre>;
  }

  const postData = data?.post || null;

  if (!postData) {
    // Data is still loading or not available
    <h1>DATA IS STILL LOADING OR NOT AVAILABLE.</h1>
    return null;
  }

  return (
    <div className='m-auto max-w-3xl'>
      <div>
        <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-1">
          <img src={data.post.coverPhoto.url} className="max-h-60 w-full object-cover"/>
        </section>

            <h1 className='text-3xl font-semibold my-5 mx-2'>{data.post.title}</h1>
            <div className='flex flex-row items-center justify-left mx-2'>

              <div className="flex-row gap-4 flex justify-center items-center ">
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
        <div className='mt-5 mx-2' dangerouslySetInnerHTML={{__html: data.post.content.html}}>
        </div>
    </div>
  )
}

export default BlogPost
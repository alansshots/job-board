import React from 'react'

import { useQuery, gql } from "@apollo/client";
import { defaultFieldResolver } from 'graphql';
const { pathname } = window.location;
const paths = pathname.split("/").filter(entry => entry !== "");
const lastPath = paths[paths.length - 1];
console.log(lastPath)

const BLOG_QUERY = gql`
{
    post(where: {slug: "${lastPath}"}) {
        id
        tags
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
    <div>
        <div>
            {data.post.id}
        </div>
    </div>
  )
}

export default BlogPost
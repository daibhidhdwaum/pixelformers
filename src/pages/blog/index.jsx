import React from 'react'
// |-- Internal Dependencies --|
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// |-- Contentful --|
import { createClient } from 'contentful';

const BlogPage = () => {
  return (
    <div>
      Blog Page
    </div>
  )
}

export default BlogPage

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const about = await client.getEntries({ content_type: 'blogPost' });
  // const sprites = await client.getEntries({ content_type: "sprites" });

  return {
    props: {
      about: about,

    },
  };
};

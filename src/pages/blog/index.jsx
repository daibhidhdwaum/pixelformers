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
  const client = createContentfulClient();

  const about = await client.getEntries({ content_type: 'blogPost' });
  // const sprites = await client.getEntries({ content_type: "sprites" });

  return {
    props: {
      about: about,

    },
  };
};

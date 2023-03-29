import React from 'react'
import { createClient } from 'contentful';
import Layout from '@/components/Layout/Layout';
import Link from 'next/link';
import Image from 'next/image';
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const Sprite = () => {
  return (
    <div>
      This is the sprite
    </div>
  )
}

export default Sprite;

export const getStaticPaths = async () => {

  const spriteRes = await client.getEntries({
    content_type: 'sprite',
  });

  const paths = spriteRes?.items?.map(sprite => {
    console.log('sprite', sprite)
    return {
      params: { sprite: sprite?.fields?.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({params}) => {

  const { items } = await client.getEntries({
    content_type: 'sprite',
    'fields.slug': params.slug,
  });


 
  return {
    props: {   sprite: items[0] },
  };
};

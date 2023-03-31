import React from 'react'
import { createClient } from 'contentful';
import Layout from '@/components/Layout/Layout';
import Link from 'next/link';
import Image from 'next/image';
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const Sprite = ({sprite}) => {

  const {
    spriteName,
    faction,
    moto,
    primaryFunction,
    altMode,
    image: {
      fields: {
        description,
        file: {
          url,
          details: {
            image: { width, height },
          },
        },
      },
    },
  } = sprite[0].fields;
  
  return (
    <Layout>
      <section className="w-full">
        <h1 className="text-3xl mb-6">{spriteName}</h1>
        <p>{faction}</p>
        <p>{moto}</p>
        <p>{primaryFunction}</p>
        <p>{altMode}</p>
        <Image
          src={`https:${url}`}
          width={width}
          height={height}
          alt={description}
        />
      </section>
    </Layout>
  );
}

export default Sprite;

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'series',
  });

  const paths = res?.items?.flatMap(series => {
    return series?.fields?.seriesReference?.map(sprite => {

      return {
        params: { slug: `${series?.fields?.slug}`, sprite: sprite?.fields?.slug },
      };
    });
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {


    const { items: sprite } = await client.getEntries({
      content_type: 'sprite',
      'fields.slug': params.sprite,
    });

  return {
    props: { 
      sprite,
     },
  };
};

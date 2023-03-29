import React from 'react';
import { createClient } from 'contentful';
import Layout from '@/components/Layout/Layout';
import Link from 'next/link';
import Image from 'next/image';
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});
import {useRouter} from 'next/router';

const SingleSeries = ({ series }) => {
  const router = useRouter();

  const singleSeriesSlug = router?.asPath;

  const {
    fields: {
      seriesName,
      seriesReference,
      seriesImage: {
        fields: {
          title,
          file: {
            url,
            details: {
              image: { width, height },
            },
          },
        },
      },
    },
  } = series;


  return (
    <Layout>
      <section className='w-full'>
        {seriesName && <h1 className='text-3xl mb-6'>{seriesName}</h1>}
        <ul className="grid grid-cols-3 border border-red-900 gap-8">
          {seriesReference?.map((sprite, id: number) => {
            const {
              fields: {
                altMode,
                faction,
                image: {
                  fields: {
                    title,
                    file: {
                      url,
                      details: {
                        image: { width, height },
                      },
                    },
                  },
                },
                slug,
                spriteName,
              },
            } = sprite;
            return (
              <li key={id}>
                <Link href={`${singleSeriesSlug}/${slug}`} className="block aspect-square relative">
                  {url && (
                    <Image
                      src={`https:${url}`}
                      alt="alt"
                      fill
                      className="object-contain"
                    />
                  )}
                </Link>
                {spriteName && <p>{spriteName}</p>}
                {faction && <p>{faction}</p>}
                {altMode && <p>{altMode}</p>}
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
};

export default SingleSeries;

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'series',
  });

  const paths = res?.items?.map(series => {
    return {
      params: { slug: series?.fields?.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {

  const { items } = await client.getEntries({
    content_type: 'series',
    'fields.slug': params.slug,
  });

  return {
    props: { series: items[0] },
  };
};

// |-- Built-in Dependencies --|
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// |-- Internal Dependencies --|
import Layout from '@/components/Layout/Layout';

// |-- External Dependencies --|
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// |-- Apis --|
import { createContentfulClient } from '@/pages/api/contentful';

// |-- Types --|
interface IParams {
  params: {
    sprite: string;
  };
}

// TODO: In the getStaticProps function, you are returning the sprite object as a prop, but you should only return the necessary fields that your component requires. This will help reduce the amount of data sent to the client, improving performance. For example, if your Sprite component only requires the title and image fields of the sprite, you can modify the getStaticProps function as follows:

// export const getStaticProps = async ({ params }) => {
//   const { items } = await client.getEntries({
//     content_type: 'sprite',
//     'fields.slug': params.sprite,
//   });

//   return {
//     props: {
//       title: items[0].fields.title,
//       image: items[0].fields.image,
//     },
//   };
// };

interface ISprite {
    name: string;
    faction: string;
    moto: string;
    primaryFunction: string;
    altMode: string;
    bio: any,
    image: {

        description: string;
        file: {
          url: string;
          details: {
            image: { width: number; height: number };
          };
        };
    };
}

const client = createContentfulClient();

const Sprite = ({
  name,
  faction,
  moto,
  primaryFunction,
  altMode,
  bio,
  image: {
    description,
    file: {
      url,
      details: {
        image: { width, height },
      },
    },
  },
}:ISprite): JSX.Element => {
  return (
    <Layout>
      <section className="w-full">
        <h1 className="text-3xl mb-6">{name}</h1>
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
        <div className="prose">{documentToReactComponents(bio)}</div>
      </section>
    </Layout>
  );
};

export default Sprite;

export const getStaticPaths = async () => {

  const res = await client.getEntries({
    content_type: 'series',
  });

  const paths = res?.items?.flatMap(series => {
    return series?.fields?.seriesReference?.map((sprite: ISprite) => {
      return {
        params: {
          slug: `${series?.fields?.slug}`,
          sprite: sprite?.fields?.slug,
        },
      };
    });
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: IParams) => {
  const { items: sprite } = await client.getEntries({
    content_type: 'sprite',
    'fields.slug': params.sprite,
  });

  const { spriteName, faction, moto, primaryFunction, altMode, bio, image: {fields: image }}:any =
    sprite[0].fields;

  return {
    props: {
      sprite: spriteName,
      faction: faction,
      moto: moto,
      primaryFunction: primaryFunction,
      altMode: altMode,
      bio: bio,
      image: image,
    },
  };
};

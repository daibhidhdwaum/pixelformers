import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { createClient } from 'contentful';
import Layout from '@/components/Layout/Layout'
import AllSeries from '@/components/AllSeries/AllSeries';
import {createContentfulClient} from './api/contentful';

const inter = Inter({ subsets: ['latin'] })

export default function Home({ about, series }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <AllSeries series={series} />
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const client = createContentfulClient();

  const about = await client.getEntries({ content_type: 'about' });
  const series = await client.getEntries({ content_type: 'series' });

  return {
    props: {
      about: about,
      series: series,
    },
  };
};

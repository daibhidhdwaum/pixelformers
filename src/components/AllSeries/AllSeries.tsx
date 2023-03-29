import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const AllSeries = ({ series }) => {

    return (
      <ul className="grid grid-cols-2 gap-6">
        {series?.items?.map((series, id:number) => {
          const {
            seriesImage: {
              fields: {
                file: {
                  url = '#',
                  details: {
                    image: { width, height },
                  },
                },
              },
            },
            seriesName,
            slug = "#",
          } = series?.fields;

          // console.log('url :>> ', url);
          return (
            <li key={id}>
              <Link href={`single-series/${slug}`}>
                {seriesName && <p>{seriesName}</p>}
                {url && (
                  <Image
                    src={`https:${url}`}
                    width={width}
                    height={height}
                    alt="alt"
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    );
}

export default AllSeries;
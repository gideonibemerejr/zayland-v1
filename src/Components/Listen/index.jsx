import React from 'react';
import { getAlbums, getNobodyKnowsPlatforms } from '../../data';

const platforms = getNobodyKnowsPlatforms();
const albums = getAlbums();
const Listen = () => {
  return (
    <main className='w-100 vh-75-l flex flex-column justify-center items-center'>
      <section className='w-100  pa2 '>
        <article className='h-100 flex flex-column justify-center items-center'>
          <div className='flex justify-center items-center mb4-ns pa4-ns mv2 pa2'>
            {platforms.map((platform, idx) => (
              <div key={platform.title} className='h-25 mh3'>
                <a
                  href={platform.link}
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <img
                    className=' h3-ns w3-ns h2 w2 dib'
                    src={platform.iconSrc}
                    alt=''
                  />
                </a>
              </div>
            ))}
          </div>
          <div className='cf pa2 flex flex-column flex-row-ns flex-wrap flex-wrap-reverse items-center justify-center'>
            {albums.map((album, idx) => (
              <div key={idx} className='fl w-100 w-50-m w-20-l pa3'>
                <a
                  href={album.link}
                  className='db link dim tc'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <img
                    src={album.src}
                    alt={album.alt}
                    className='w-100 db outline black-10'
                  />
                  <dl className='mt2 f6 lh-copy'>
                    <dt className='clip'>Title</dt>
                    <dd className='ml0 white-80 f5 truncate w-100'>
                      {album.title}
                    </dd>
                    <dt className='clip'>Artist</dt>
                    <dd className='ml0 f5 gray truncate w-100'>
                      {album.artists.map((artist, idx) => (
                        <React.Fragment key={idx}>
                          {artist}&nbsp;
                        </React.Fragment>
                      ))}
                    </dd>
                  </dl>
                </a>
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
};

export default Listen;

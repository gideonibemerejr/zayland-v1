import React from 'react';
import { getAlbumCredits } from '../../data';
const albumCredits = getAlbumCredits();
const AlbumCredit = () => {
  return (
    <section className='mt4 w-100 flex flex-column items-center justify-center'>
      <div className='w-100 flex flex-column items-center justify-center'>
        <img
          className='w-40-l w-75'
          src='https://zayland-assets.s3.amazonaws.com/images/Title_Text.png'
          alt=''
        />
      </div>

      <div className='flex flex-column justify-center items-center  w-100 mt4'>
        <div className='mb4 w-75-l w-100 mh0-l bt b--white-80 bw2' />
        <div className='w-75-l w-100 flex mw9-l white-80 '>
          <p
            dangerouslySetInnerHTML={{ __html: albumCredits.story }}
            className='mb4  mt0 f5 f4-l '
          />
        </div>
        <div className='w-75-l w-100 flex flex-wrap justify-center '>
          {Object.keys(albumCredits.credits).map((key, idx) => (
            <div
              key={idx}
              className='flex flex-column white-80 w-50-ns w-100 pl7-l pr4-m'
            >
              <p className='f5 fw7 mb1 bb b--white-80'>{key.toUpperCase()}</p>
              <p className='f6'>{albumCredits.credits[key]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlbumCredit;

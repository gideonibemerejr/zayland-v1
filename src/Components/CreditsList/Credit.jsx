import React from 'react'

const Credit = ({ songTitleSrc, songTitle, story, trackNo, producers }) => {
  return (
    <section className='white-80 mt4 w-100 flex flex-column items-center justify-center'>
      <p className='w-75-l w-100 tl f3 fw7 mb4'>NK - TRACK {'0' + trackNo}</p>
      <div className='mb4 w-75-l w-100 mh0-l bt b--white-80 bw2' />
      <article className='w-75-l flex flex-row-l flex-column items-center items-start-l'>
        <div className='w-100 w-50-l flex mr4-l '>
          <img src={songTitleSrc} alt={songTitle} className='w-100 h-100' />
        </div>
        <div className='w-50-l w-100'>
          <div className='w-100 mt3-l mt2'>
            <div className='w-100'>
              <p className='ma0 f4'>{story && story}</p>
            </div>
            {producers && (
              <div className='pl7-ns mt4 ml6 ml2-ns '>
                <p className='f5 fw7 ma0'>
                  {producers.length > 1 ? 'PRODUCERS' : 'PRODUCER'}{' '}
                </p>
                <div className='bb b--white-80 mt1' />
                <p className='f5'>
                  {producers.map((producer, idx) => (
                    <React.Fragment key={idx}>{producer}&nbsp;</React.Fragment>
                  ))}
                </p>
              </div>
            )}
          </div>
        </div>
      </article>
    </section>
  )
}

export default Credit

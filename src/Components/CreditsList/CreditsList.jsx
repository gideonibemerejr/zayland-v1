import React from 'react'
import { getFullAlbumCredits } from '../../data'
import { AlbumCredit, Credit } from '../index'

const credits = getFullAlbumCredits()

const CreditsList = () => {
  return (
    <div className='ma4'>
      <AlbumCredit />
      {credits.map((credit) => (
        <Credit {...credit} key={credit.trackNo} />
      ))}
    </div>
  )
}

export default CreditsList

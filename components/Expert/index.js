/* eslint-disable @next/next/no-sync-scripts */
import Script from 'next/script'
import React from 'react'

const Expert = () => {
  return (
    <div className='bg-[#F2EDE4]   px-2 md:px-20 py-20 lg:px-52 font-Poppins'>
        <div className='w-full mb-16 text-xl  md:text-2xl font-bold'>Experts says...</div>
        <div class="powr-music-player" id="63bdb70b_1639211568"></div>
        <Script
        src="https://www.powr.io/powr.js?platform=html"
      />
    </div>
  )
}

export default Expert
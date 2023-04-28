import React from 'react'

import Banner from '../components/Banner'
import LatestJobs from '../components/LatestJobs'
import Testimonials from '../components/Testimonials'
const Home = () => {
  return (
    <div id='home'>
      <>
      <Banner/>
      <LatestJobs/>
      <Testimonials/>
      </>
    </div>
  )
}


export default Home
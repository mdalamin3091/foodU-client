import React from 'react'
import HeroArea from './components/HeroArea'
import Menus from './components/Menus'
import Offer from './components/Offer'
import Popular from './components/Popular'
import Offer50 from './components/Offer50'

const Home = () => {
  return (
    <>
      <HeroArea />
      <Menus />
      <Offer />
      <Popular />
      <Offer50 />
    </>
  )
}

export default Home
import React from 'react'
import Slider from "../../components/Slider/Slider";
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Categories from '../../components/Categories/Categories';
import Cantact from '../../components/Contact/Cantact';
import "./Home.scss"

const Home = () => {

  return (

    <div className='home'>
      <Slider />

      <FeaturedProducts type="Featured" />

      <Categories/>

      <FeaturedProducts type="Trending"  />

      <Cantact />

    </div>
  )
}

export default Home
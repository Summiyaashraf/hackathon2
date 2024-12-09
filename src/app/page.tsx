import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import React from 'react'
import FeaturedProducts from '@/components/FeaturedProducts'
import ImageSection from '@/components/Imagesection'
import TopCategories from '@/components/TopCategories'
import Explorestyle from '@/components/Explorestyle'
import Footer from '@/components/Footer'
import OurProduct from '@/components/ourProduct'
import AllProduct from '@/components/AllProducts'
import Instagram from '@/components/Instagram'
import AboutSection from '@/components/aboutSection'
import AboutHero from '@/components/AboutHero'
import AboutPopularProduct from '@/components/aboutPopularProduct'


const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ImageSection />
      <FeaturedProducts />
      <TopCategories />
      <Explorestyle />
      <OurProduct />
      <AllProduct />
      <Instagram />
      <AboutHero />
    <AboutSection />
    <AboutPopularProduct />
      <Footer />
    </div>
  )
}

export default page

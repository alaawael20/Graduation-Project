import React from 'react'
import NavBar from '../../Components/Uitily/NavBar'
import Landing from '../../Components/Home/Landing'
import HomeRecently from '../../Components/Home/HomeRecently'
import HomeServices from '../../Components/Home/HomeServices'
import HomeAbout from '../../Components/Home/HomeAbout'
import HomeBrands from '../../Components/Home/HomeBrands'
import Footer from '../../Components/Uitily/Footer'

const Homepage = () => {
  return (
    <div>
      <NavBar/>
      <Landing/>
      <HomeRecently/>
      <HomeServices/>
      <HomeAbout/>
      <HomeBrands/>
      <Footer/>
    </div>
  )
}

export default Homepage
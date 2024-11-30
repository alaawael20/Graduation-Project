import React from 'react'
import NavBar from '../../Components/Uitily/NavBar'
import Filter from '../../Components/Search/FilterCar'
import Footer from '../../Components/Uitily/Footer'

const Search = () => {
  return (
    <div>
        <NavBar/>
        <div className='titlePage'>Find Suitable Auto For You</div>
        <Filter/>
        <Footer/>
    </div>
  )
}

export default Search
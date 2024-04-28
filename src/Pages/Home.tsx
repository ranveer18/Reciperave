import Category from "../Components/Category"
import Contentcard from "../Components/Contentcard"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
// import Tagbuttom from "../Components/Tagbuttom"
import { useState } from 'react';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Navbar setSearchQuery={setSearchQuery} />
      <Category />
      {/* <Tagbuttom /> */}
      <Contentcard searchQuery={searchQuery} />
      <Footer />
    </>
  )
}

export default Home

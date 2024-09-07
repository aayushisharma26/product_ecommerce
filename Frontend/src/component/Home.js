import React from 'react';
import Header from './Header'; 
import Carousel from './Carousel'; 
import AllCategory from './AllCategory'; 
import AllProduct from "./AllProduct";
import Footer from './Footer'; 


function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <AllCategory />
      <AllProduct/>
      <Footer />
    </>
  );
}

export default Home;

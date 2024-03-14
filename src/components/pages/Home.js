import React from 'react';
import '../../App.css';
import MainPage from '../MainPage';
import Cards from '../Cards';
import Footer from '../Footer';
import ContactInfo from '../ContactInfo';


function Home() {
  return (
    <>
      <MainPage />
      <Cards/>
      <ContactInfo/>
      <Footer />
    </>
  );
}

export default Home;
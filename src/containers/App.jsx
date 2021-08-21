import React from 'react';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import CategoryTitle from '../components/CategoryTitle';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.css';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <SearchBox/>
      <CategoryTitle>
        <Carousel>
          <CarouselItem/>
          <CarouselItem/>
          <CarouselItem/>
          <CarouselItem/>
        </Carousel>
      </CategoryTitle>
      <CategoryTitle>
        <Carousel>
          <CarouselItem/>
          <CarouselItem/>
          <CarouselItem/>
          <CarouselItem/>
        </Carousel>
      </CategoryTitle>
      <CategoryTitle>
        <Carousel>
          <CarouselItem/>
          <CarouselItem/>
          <CarouselItem/>
          <CarouselItem/>
        </Carousel>
      </CategoryTitle>
      <Footer/>
    </div>
  );
}

export default App;

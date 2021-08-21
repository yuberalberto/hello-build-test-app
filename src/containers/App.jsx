import React from 'react';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import CategoryTitle from '../components/CategoryTitle';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <SearchBox/>
      <CategoryTitle title='Mi lista'>
        <Carousel>
          <CarouselItem/>
          <CarouselItem/>
          <CarouselItem/>
          <CarouselItem/>
        </Carousel>
      </CategoryTitle >
      <CategoryTitle title='Tendencias'>
        <Carousel>
          <CarouselItem/>
          <CarouselItem/>
          <CarouselItem/>
          <CarouselItem/>
        </Carousel>
      </CategoryTitle>
      <CategoryTitle title='Originales de PlatziVideo'>
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

import React from 'react';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import CategoryTitle from '../components/CategoryTitle';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState/'

const App = () => {

  const initialState = useInitialState(API);

  return (
    <div className="App">
      <Header/>
      <SearchBox/>
      {initialState.myList.length  &&
        <CategoryTitle title='Mi lista'>
          <Carousel>
            { initialState.myList.map(item => <CarouselItem key={item.id} {...item}/>) }          
          </Carousel>
        </CategoryTitle >
      }

      <CategoryTitle title='Tendencias'>
        <Carousel>
          { initialState.trends.map(item => <CarouselItem key={item.id} {...item}/>) }          
        </Carousel>
      </CategoryTitle>
      <CategoryTitle title='Originales de PlatziVideo'>
        <Carousel>
        { initialState.originals.map(item => <CarouselItem key={item.id} {...item}/>) }
        </Carousel>
      </CategoryTitle>
      <Footer/>
    </div>
  );
}

export default App;

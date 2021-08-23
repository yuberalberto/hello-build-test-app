import React from 'react';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import CategoryTitle from '../components/CategoryTitle';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/Home.scss';

const Home = ({ myList, trends, originals }) => (
  <>
    <SearchBox />
    {myList.length > 0
        && (
        <CategoryTitle title="Mi lista">
          <Carousel>
            { myList.map((item) => (
              <CarouselItem
                key={item.id}
                {...item}
                isList
              />
            ))}
          </Carousel>
        </CategoryTitle>
        )}

    <CategoryTitle title="Tendencias">
      <Carousel>
        { trends.map((item) => <CarouselItem key={item.id} {...item} />) }
      </Carousel>
    </CategoryTitle>
    <CategoryTitle title="Originales de PlatziVideo">
      <Carousel>
        { originals.map((item) => <CarouselItem key={item.id} {...item} />) }
      </Carousel>
    </CategoryTitle>
  </>
);

const mapStateToProps = (state) => ({
  myList: state.myList,
  trends: state.trends,
  originals: state.originals,
});

export default connect(mapStateToProps, null)(Home);


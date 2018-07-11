import React, { Component } from 'react';
import AnimalCarousel from '../../components/Carousel/';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Div from '../../components/Divider/Div';
import Header from '../../components/Container';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Div />
        <AnimalCarousel />
      </div>
    );
  }
}

export default Home;

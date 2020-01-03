import React from 'react';

import * as S from './styles';
import Layout from '../../component/Layout';
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.css";

const Landing: React.FC = () => {
  return (
    <Layout>
      <S.main>
        <Carousel style={{width:"100%"}}>
          <Carousel.Item>
              <img
              src={'https://www.thisiscolossal.com/wp-content/uploads/2019/07/cat-hat-1.jpg'}
              alt="First slide"
              width="100%"
              />
          </Carousel.Item>
          <Carousel.Item>
              <img
              src={'https://www.thisiscolossal.com/wp-content/uploads/2019/07/cat-hat-1.jpg'}
              alt="Third slide"
              width="100%"
              />
          </Carousel.Item>
          <Carousel.Item>
              <img
              src={'https://www.thisiscolossal.com/wp-content/uploads/2019/07/cat-hat-1.jpg'}
              alt="Third slide"
              width="100%"
              />
          </Carousel.Item>
        </Carousel>
        <S.Section1>
          
        </S.Section1>
      </S.main>
    </Layout>
  );
};

export default Landing;

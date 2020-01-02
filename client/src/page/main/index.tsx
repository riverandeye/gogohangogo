import React from 'react';

import * as S from './styles';
import Layout from '../../component/Layout';

const Main: React.FC = () => {
  return (
    <Layout>
      <S.main>
        <S.title>제목</S.title>
      </S.main>
    </Layout>
  );
};

export default Main;

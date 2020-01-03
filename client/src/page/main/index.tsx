import React from 'react';

import * as S from './styles';
import Layout from '../../component/Layout';

const Main: React.FC = () => {
  return (
    <Layout>
      <S.main>
        <S.title>Nbread에 오신 것을 환영합니다</S.title>
      </S.main>
    </Layout>
  );
};

export default Main;

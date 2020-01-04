import React from 'react';
import * as S from './styles';
import { MDBAnimation } from 'mdbreact';

import logo from '../../assets/logo/npang.png';

interface SpinnerProps {
  visible?: Boolean;
}

const Spinner: React.FC<SpinnerProps> = ({ visible }) => {
  if (visible) {
    return (
      <S.Image>
        <MDBAnimation type="tada" infinite>
          <img src={logo} width="100%" />
        </MDBAnimation>
      </S.Image>
    );
  }
};

export default Spinner;

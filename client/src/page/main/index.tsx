import React, { useState, useEffect } from 'react';
import * as S from './styles';
import Layout from '../../component/Layout';
import axios from 'axios';

import Modal from '../../component/Modal';
import PartyCard from '../../component/PartyCard';

// for filter
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// 테스트용 parties 객체
// const parties = [
//   {
//     name: 'a',
//     number: 1,
//   },
//   {
//     name: 'b',
//     number: 2,
//   },
//   {
//     name: 'c',
//     number: 3,
//   },
//   {
//     name: 'd',
//     number: 4,
//   },
//   {
//     name: 'e',
//     number: 5,
//   },
// ];

// 테스트용 필터

const Main: React.FC = () => {
  const [parties, setParties] = useState([]);
  const [state, setState] = useState({
    isModalOpened: false,
  });
  const ButtonClick = () => {
    setState({
      isModalOpened: true,
    });
  };
  const closeModal = () => {
    setState({
      isModalOpened: false,
    });
    console.log('asdf');
  };
  useEffect(() => {
    axios
      .get('http://127.0.0.1:4000/parties')
      .then(function(response) {
        const data = response.data;
        setParties(data);
        console.log(data);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  }, []);
  return (
    <Layout>
      <S.Main>
        <S.Filter>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon fontSize="large" color="error" />}
              aria-controls="panel1c-content"
              id="panel1c-header"
            >
              <div style={{ fontSize: '1.6rem', marginRight: '1rem' }}>
                이것이 필-터다
              </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div style={{ alignItems: 'center' }} />
              <div style={{ flexBasis: '33.33%' }}>form</div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </S.Filter>
        <S.GridContainer>
          <S.GridLabel>
            당신의 팟을 찾아보세요!<span role="img">😊</span>
          </S.GridLabel>
          {parties.length > 0 &&
            parties.map(party => (
              <S.GridItem>
                <PartyCard {...party} />
              </S.GridItem>
            ))}
        </S.GridContainer>
      </S.Main>
    </Layout>
  );
};

export default Main;

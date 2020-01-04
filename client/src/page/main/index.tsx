import React, { useState, useEffect } from 'react';
import * as S from './styles';
import Layout from '../../component/Layout';
import axios from 'axios';
import Modal from '../../component/Modal';
import PartyCard from '../../component/PartyCard';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// 테스트용 필터

const Main: React.FC = () => {
  const [parties, setParties] = useState([]);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [modalInfo, setModalInfo] = useState({});
  let partyCardId = 0;
  const openModal = () => {
    setIsModalOpened(true);
  };
  const closeModalHandler = () => {
    setIsModalOpened(false);
  };
  const [clickedCard, setClickedCard] = useState(null);
  useEffect(() => {
    axios
      .get('http://127.0.0.1:4000/parties')
      .then(function(response) {
        const data = response.data;
        setParties(data);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  }, []);
  useEffect(() => {
    if (clickedCard !== null) {
      const currentInfoObject = parties[clickedCard - 1];
      // console.log(currentInfoObject);
      setModalInfo({
        ...modalInfo,
        title: currentInfoObject.title,
        introduction: currentInfoObject.introduction,
        personnel: currentInfoObject.personnel,
        adminUserId: currentInfoObject.adminUserId,
        createdAt: currentInfoObject.createdAt,
        ottName: currentInfoObject.ottName,
        setClickedCard: currentInfoObject.setClickedCard,
        partyCardId: currentInfoObject.partyCardId,
      });
      openModal();
    }
  }, [clickedCard]);
  return (
    <Layout>
      <Modal
        isOpened={isModalOpened}
        closeModalHandler={closeModalHandler}
        modalInfo={modalInfo}
      />
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
            내 상황에 <br />딱 맞는 팟을 찾아보세요!
            <span role="img"> 😊</span>
          </S.GridLabel>
          {parties.length > 0 &&
            parties.map(party => (
              <S.GridItem>
                <PartyCard
                  {...party}
                  setClickedCard={setClickedCard}
                  partyCardId={++partyCardId}
                />
              </S.GridItem>
            ))}
        </S.GridContainer>
      </S.Main>
    </Layout>
  );
};

export default Main;

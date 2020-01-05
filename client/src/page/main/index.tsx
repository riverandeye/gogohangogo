import React, { useState, useEffect } from 'react';
import * as S from './styles';
import Layout from '../../component/Layout';
import axios from 'axios';
import Modal from '../../component/Modal';
import PartyCard from '../../component/PartyCard';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { useCookieUser } from '../../utils/use-cookie-user';

// 테스트용 필터
import getOttIconUrl from '../../utils/ottIconMatcher';
// 필터용
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { useCheckLogin } from '../../utils/check-login';

const Main: React.FC = () => {
  const user = useCheckLogin();

  const [parties, setParties] = useState([]);
  // for modal
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

  const [searchOption, setSearchOption] = useState({
    sortType: '',
    ottType: '',
  });

  const changeSortType = sortType => {
    setSearchOption({
      sortType: sortType,
      ottType: searchOption.ottType,
    });
  };

  const changeOttType = ottType => {
    setSearchOption({
      sortType: searchOption.sortType,
      ottType: ottType,
    });
  };

  const searchHandler = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_HOST}/parties`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(searchOption),
      },
    );

    const data = await response.json();
    setParties(data);
  };

  // for filter
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_HOST}/parties`)
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

  console.log(searchOption);

  useEffect(() => {
    if (clickedCard !== null) {
      const currentInfoObject = parties[clickedCard - 1];
      console.log(currentInfoObject);
      setModalInfo({
        ...modalInfo,
        title: currentInfoObject.title,
        introduction: currentInfoObject.introduction,
        personnel: currentInfoObject.personnel,
        capacity: currentInfoObject.capacity,
        adminUserId: currentInfoObject.adminUserId,
        createdAt: currentInfoObject.createdAt,
        ottName: currentInfoObject.ottName,
        setClickedCard: currentInfoObject.setClickedCard,
        partyCardId: currentInfoObject.id,
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
              <div
                style={{
                  fontSize: '1.6rem',
                  fontWeight: 600,
                  textAlign: 'right',
                  color: '#808080',
                }}
              >
                검색 조건 설정
              </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <S.FilterContent>
                <S.OttFilterSection>
                  <FormControl component="fieldset">
                    <S.FilterSectionLable>
                      OTT 종류별로 검색하기
                    </S.FilterSectionLable>
                    <Divider />
                    <RadioGroup aria-label="position" name="position" row>
                      <form>
                        <div className="cc-selector">
                          <S.Group>
                            <input
                              id="watcha"
                              type="radio"
                              name="credit-card"
                              value="watcha"
                              onClick={() => changeOttType('watcha')}
                            />
                            <div className="radioInfo">watcha</div>
                            <label
                              className="watcha"
                              htmlFor="watcha"
                              style={{
                                backgroundImage: `url(${getOttIconUrl(
                                  'watcha',
                                )})`,
                                backgroundSize: '5rem',
                              }}
                            ></label>
                          </S.Group>
                          <S.Group>
                            <input
                              id="netflix"
                              type="radio"
                              name="credit-card"
                              value="netflix"
                              onClick={() => changeOttType('Netflix')}
                            />
                            <div className="radioInfo">netflix</div>
                            <label
                              className="netflix"
                              htmlFor="netflix"
                              style={{
                                backgroundImage: `url(${getOttIconUrl(
                                  'Netflix',
                                )})`,
                                backgroundSize: '5rem',
                              }}
                            ></label>
                          </S.Group>
                          <S.Group>
                            <input
                              id="wavve"
                              type="radio"
                              name="credit-card"
                              value="wavve"
                              onClick={() => changeOttType('wave')}
                            />
                            <div className="radioInfo">wavve</div>
                            <label
                              className="wavve"
                              htmlFor="wavve"
                              style={{
                                backgroundImage: `url(${getOttIconUrl(
                                  'wavve',
                                )})`,
                                backgroundSize: '5rem',
                              }}
                            ></label>
                          </S.Group>
                          <S.Group>
                            <input
                              id="prime"
                              type="radio"
                              name="credit-card"
                              value="prime"
                              onClick={() => changeOttType('Amazon Prime')}
                            />
                            <div className="radioInfo">amazon prime</div>
                            <label
                              className="prime"
                              htmlFor="prime"
                              style={{
                                backgroundImage: `url(${getOttIconUrl(
                                  'Amazon Prime',
                                )})`,
                                backgroundSize: '5rem',
                              }}
                            ></label>
                          </S.Group>
                        </div>
                      </form>
                    </RadioGroup>
                  </FormControl>
                </S.OttFilterSection>
                <S.SortFilterSection>
                  <S.FilterSectionLable>기준으로 정렬하기</S.FilterSectionLable>
                  <Divider />
                  <FormControl component="fieldset" className="somethin">
                    <RadioGroup aria-label="sort" name="sort">
                      <S.Group>
                        <FormControlLabel
                          value="female"
                          control={<Radio color="primary" />}
                          label={
                            <Typography
                              style={{
                                fontFamily: 'NanumSquare',
                                fontSize: '1.4rem',
                              }}
                            >
                              신뢰도 순
                            </Typography>
                          }
                          className="radioInfo"
                          onClick={() => changeSortType('priority')}
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio color="primary" />}
                          label={
                            <Typography
                              style={{
                                fontFamily: 'NanumSquare',
                                fontSize: '1.4rem',
                              }}
                            >
                              등록일 순
                            </Typography>
                          }
                          className="radioInfo"
                          onClick={() => changeSortType('latest')}
                        />
                      </S.Group>
                    </RadioGroup>
                  </FormControl>
                </S.SortFilterSection>
                <S.FilterSubmitSection>
                  <input
                    className="filterSubmitInput"
                    type="button"
                    value="선택한 필터 적용하기"
                    onClick={searchHandler}
                  />
                </S.FilterSubmitSection>
              </S.FilterContent>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </S.Filter>
        <S.GridContainer>
          <S.GridLabel>
            내 상황에 <br />
            <span style={{ color: '#f94e36', fontWeight: 700 }}>딱</span> 맞는
            팟을 찾아보세요!
            <span role="img"> 😊</span>
          </S.GridLabel>
          {parties.length > 0 &&
            parties.map((party, idx) => (
              <S.GridItem key={idx}>
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

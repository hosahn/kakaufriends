import React, { useEffect, useState } from 'react';
import * as Api from '../../api';
import { NavWrap, Btn, UserBtn, HighLight } from '../../styles/NavStyle';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import {
  challengeState,
  emotionState,
  userState,
  randomListState,
  openEmotionState,
  countEmotionState,
} from '../../atoms';
import snackBar from '../snackBar';

const Nav = () => {
  const navigate = useNavigate();
  const resetUser = useResetRecoilState(userState);
  const diaryCheck = useRecoilValue(userState);
  const emotion = useResetRecoilState(emotionState);
  const randomList = useResetRecoilState(randomListState);
  const challenge = useResetRecoilState(challengeState);
  const openEmotion = useResetRecoilState(openEmotionState);
  const countEmotion = useResetRecoilState(countEmotionState);

  const logoutHandler = async () => {
    try {
      const res = await Api.get('user/logout');
      if (res.data === true) {
        resetUser();
        emotion();
        randomList();
        challenge();
        openEmotion();
        countEmotion();
        navigate('/');
      } else {
        alert('로그아웃에 실패하였습니다.');
        navigate('/');
      }
    } catch (error) {
      if (error.response) {
        const { data } = error.response;
        console.error('data : ', data);
        navigate('/');
      }
    }
  };

  const clickDiary = () => {
    if (diaryCheck.daily_check === true) {
      snackBar('warning', '일기는 하루에 한 번만 작성 가능합니다..!');
    } else {
      navigate('/diaryEditor');
    }
  };

  return (
    <NavWrap>
      <UserBtn onClick={() => navigate('/usermain')}>
        <FontAwesomeIcon icon={faCircleUser} className="user" />
      </UserBtn>
      <Btn onClick={() => navigate('/challenge')}>
        <HighLight>챌린지</HighLight>
      </Btn>
      <Btn onClick={() => navigate('/report')}>
        <HighLight>리포트</HighLight>
      </Btn>
      <Btn onClick={clickDiary}>
        <HighLight>일기 쓰기</HighLight>
      </Btn>
      <Btn onClick={() => navigate('/note')}>
        <HighLight>전체 일기</HighLight>
      </Btn>
      <Btn onClick={logoutHandler}>
        <HighLight>로그아웃</HighLight>
      </Btn>
    </NavWrap>
  );
};

export default Nav;

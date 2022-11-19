import React from 'react';
import Container from './Container';
import { Background, Content } from '../../styles/ModalStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Modal = (props) => {
  const clickClose = () => {
    props.setOpen(false);
  };

  return (
    <Container>
      <Background>
        <Content>
          <CloseBtn onClick={clickClose}>
            <FontAwesomeIcon icon={faCircleXmark} className="user" />
          </CloseBtn>
          <div>{props.children}</div>
        </Content>
      </Background>
    </Container>
  );
};

export default Modal;

const CloseBtn = styled.div`
  color: gray;
  font-size: 20px;
  float: right;
  margin-right: 20px;
  margin-top: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &: hover {
    color: #1864ab;
    transform: scale(1.3);
  }
`;

import styled from '@emotion/styled';
import { CgClose } from 'react-icons/cg';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  backdrop-filter: blur(2px);
  align-items: center;
  z-index: 10;
  padding-top: 78px;
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fff;
  border-radius: 24px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  padding: 28px 20px;
  position: relative;
  z-index: 1100;
  overflow: hidden;

  padding: 40px;
  width: 541px;
  height: 752px;
`;

export const CloseBtn = styled(CgClose)`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;

  color: rgba(18, 20, 23, 1)
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;



`;

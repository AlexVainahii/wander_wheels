import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import styled from '@emotion/styled';
export const HeartBtn = styled(AiOutlineHeart)`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  color: rgba(255, 255, 255, 0.8);

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
`;
export const FillHeartBtn = styled(AiFillHeart)`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  color: rgba(52, 112, 255, 1);

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
`;
export const ButtonMore = styled.button`
  margin-top: 28px;
  width: 274px;
  height: 44px;
  background-color: #3470ff;
  color: #fff;
  padding: 12px 99pz;
  border: none;
  border-radius: 12px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;
  &:hover {
    background-color: #0b44cd;
  }
`;

export const Img = styled.img`
  width: 274px;
  height: 268px;
  border-radius: 14px;
  display: block;
`;
export const WrapperText = styled.div`
  width: 274px;
  height: 158px;
  padding-top: 14px;
`;
export const WrapperTitle = styled.div`
  width: 274px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
`;

export const SpanTitle = styled.span`
  color: ${props => (props.model ? '#3470ff' : '#121417')};
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  display: inline-block;
`;
export const SpanLabel = styled.span`
  color: rgba(18, 20, 23, 0.5);
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  text-wrap: nowrap;
  padding: 0 6px;
  padding-left: ${props => (props.type === 'first' ? '0' : '6px')};
  padding-right: ${props => (props.type === 'last' ? '0' : '6px')};
  border-right: ${props =>
    props.type === 'last' ? 'none' : '1px solid rgba(18, 20, 23, 0.10)'};
`;
export const WrapperLabel = styled.div`
  margin-top: 8px;
  width: 274px;
  height: 40px;
  padding-right: 10px;
`;
export const Stroke = styled.div`
  margin-top: ${props => (props.type ? 0 : '4px')};
  width: 274px;
  height: 18px;
  display: flex;

  align-items: center;
`;

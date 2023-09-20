import styled from '@emotion/styled';
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;
export const Img = styled.img`
  width: 461px;
  height: 248px;
  border-radius: 14px;
  background-size: cover;
`;
export const WrapperText = styled.div`
  width: 461px;
  height: 126px;
  padding-top: 14px;
`;
export const WrapperTitle = styled.div`
  width: 461px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
`;

export const SpanTitle = styled.span`
  color: ${props => (props.model ? '#3470ff' : '#121417')};
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  display: inline-block;
`;
export const SpanLabel = styled.span`
  color: rgba(18, 20, 23, 0.5);
  color: ${props => (props.model ? '#3470ff' : '#121417')};
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  text-wrap: nowrap;
  padding-right: 6px;
  margin-right: 6px;
  border-right: 1px solid rgba(18, 20, 23, 0.1);

  &.end-of-row {
    border-right: 1px solid #fff;
  }
`;
export const WrapperLabel = styled.div`
  margin-top: 8px;
  width: 461px;
  height: 40px;
  padding-right: 10px;
`;
export const Stroke = styled.div`
  margin-top: ${props => (props.type ? 0 : '4px')};
  width: 350px;
  height: 18px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 4px;

  align-items: center;
`;
export const WrapperDescript = styled.div`
  margin-top: 14px;
  width: 461px;
  height: 40px;
  color: #121417;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
export const WrapperAcces = styled.div`
  margin-top: 24px;
  width: 461px;
  height: 68px;
`;
export const WrapperRent = styled.div`
  margin-top: 24px;
  width: 461px;
  height: 100px;
`;
export const SpanAcces = styled.span`
  color: #121417;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
export const SpanButton = styled.div`
  background: #f9f9f9;
  border-radius: 35px;
  display: flex;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  color: #363535;

  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.24px;
`;
export const Span = styled.div`
  color: #3470ff;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  margin-left: 1px;
  letter-spacing: -0.24px;
`;
export const ButtonRental = styled.button`
  margin-top: 24px;
  width: 168px;
  height: 44px;
  background-color: #3470ff;
  color: #fff;
  padding: 12px 50px;
  border: none;
  border-radius: 12px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px
  &:hover {
    background-color: #0b44cd;
  }
`;

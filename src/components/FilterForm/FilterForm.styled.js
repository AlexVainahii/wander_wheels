import styled from '@emotion/styled';
export const Input = styled.input`
  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #121417;
  padding: 14px 18px;
  border: none;
  background-color: rgba(247, 247, 251, 1);
  width: 160px;
  outline: none;
  :first-of-type {
    border-top-left-radius: 14px;
    border-bottom-left-radius: 14px;
    border-right: 1px solid #8a8a89;
    ::before {
      content: 'From:';
      position: absolute;
      color: black;
    }
  }
  :last-of-type {
    border-top-right-radius: 14px;
    border-bottom-right-radius: 14px;
    ::before {
      content: 'To:';
    }
  }
`;
export const ContainerFilter = styled.div`
  width: 859px;
  height: 74px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
export const WrapperMake = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Select = styled.select`
  width: 224px;
  height: 48px;
  padding: 14px 18px;
  border: none;
  border-radius: 14px;
  background-color: rgba(247, 247, 251, 1);
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
export const Label = styled.label`
  color: #8a8a89;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  width: 65px;
  height: 18px;
  margin-bottom: 8px;
`;

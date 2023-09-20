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
    padding-left: 65px;
  }
  :last-of-type {
    border-top-right-radius: 14px;
    border-bottom-right-radius: 14px;
    padding-left: 50px;
  }
`;
export const ContainerFilter = styled.div`
  position: relative;
  width: 859px;
  height: 74px;
  margin: 0 auto;
  display: flex;
  margin-top: 50px;
  margin-bottom: 50px;
  align-items: center;
`;
export const WrapperMake = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin-right: 18px;
`;
export const Select = styled.input`
  width: ${props => (props.rentalPrice ? '125px' : '224px')};
  height: 48px;
  padding: 14px 18px;
  padding-left: ${props => (props.rentalPrice ? '47px' : '18px')};
  border: none;
  border-radius: 14px;
  background-color: rgba(247, 247, 251, 1);
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  outline: none;
`;
export const Label = styled.label`
  color: #8a8a89;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;

  height: 18px;
  margin-bottom: 8px;
  ${props =>
    props.rentalPrice
      ? '::before {content: "To";left:18px; bottom: 14px; position:absolute;color: #121417; font-family: Manrope;font-size: 18px; font-style: normal;font-weight: 500;line-height: 20px;};'
      : ''};
`;
export const LabelI = styled.label`
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  position: absolute;
  left: 18px;
  bottom: 9px;
  height: 18px;
  margin-bottom: 8px;
`;
export const LabelE = styled.label`
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  position: absolute;
  left: 184px;
  bottom: 9px;
  height: 18px;
  margin-bottom: 8px;
`;
export const SelectDown = styled.img`
  position: absolute;
  right: 13px;
  bottom: 13px;
  ${props => props.isOpen && 'transform: rotate(180deg)'};
`;

export const WrapperUl = styled.div`
  position: absolute;
  width: ${props => (props.rentalPrice ? '125px' : '224px')};
  height: 272px;
  padding: 14px 18px;
  padding-right: 8px;
  top: 100%;
  transform: translateY(4px);
  z-index: 500;
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  background: #fff;
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  display: ${props => (props.isOpen === false ? 'none' : 'block')};
  .scrollable-ul {
    scrollbar-width: thin;
  }

  .scrollable-ul::-webkit-scrollbar-track {
  }

  .scrollable-ul::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(18, 20, 23, 0.05);
  }

  .scrollable-ul::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;
export const SuggestionsList = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  margin: 0;
  overflow-y: scroll;
  padding: 0;

  ::-webkit-scrollbar {
    width: 8px;
  }
  li {
    cursor: pointer;
    color: #121417;
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      color: ${props =>
        props.disabled === false ? 'rgba(0, 0, 0, 0.2)' : ' #555'};
    }
  }
`;

export const ButtonSearch = styled.button`
  width: 136px;
  height: 48px;
  background-color: #3470ff;
  color: #fff;
  padding: 14px 44px;
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
export const WrapperButton = styled.div`
  padding-top: 26px;
`;
export const ButtonReset = styled.button`
  width: 48px;
  height: 48px;
  background-color: #3470ff;
  color: #fff;
  padding: 14px 14px;
  border: none;
  border-radius: 12px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;
  position: absolute;
  right: -64px;
  bottom: 0;

  &:hover {
    background-color: #0b44cd;
  }
`;

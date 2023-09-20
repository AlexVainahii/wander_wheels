import styled from '@emotion/styled';
export const Span = styled.span`
  display: ${props => (props.visible ? 'block' : 'none')};
  width: 79px;
  height: 24px;
  margin: 0 auto;
  color: #3470ff;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-decoration-line: underline;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover {
    color: rgba(11, 68, 205, 1);
  }
`;

import styled from "styled-components";

import { NavLink } from "react-router-dom";

const Container = styled.div`
  display: flex;
  position: relative;

  flex-wrap: no-wrap;
  justify-content: center;
  z-index: 200;
  background: linear-gradient(
    to bottom,
    rgba(150, 255, 255, 1),
    rgba(0, 0, 0, 1)
  );
  border-radius: 0 0 50px 50px;
  @media (max-width: 443px) {
    nav {
      flex-direction: column;
    }
    div {
      flex-direction: column;
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-left: 25px;
  z-index: 5;
  @media (max-width: 420px) {
    margin-left: 0;
  }
`;

export const NavigationLink = styled(NavLink)`
  margin: 10px;
  margin-left: 15px;
  font-size: x-large;
  display: block;
  padding: 8px;
  text-align: center;
  border-radius: 6px;
  text-decoration: none;
  color: white;
  text-shadow: 2px 2px 2px #000, 0 2px 2px #000, -2px 0 2px #000,
    0 -2px 2px #000;
  @media (max-width: 443px) {
    margin-top: 0;
    padding: 2px;
  }
  &.active {
    color: orange;
  }
  &:hover {
    scale: 1.2;
    color: orange;
  }
`;

export { Container };

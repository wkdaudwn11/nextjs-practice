import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;

export const Sidebar = styled.div`
  width: 200px;
  float: left;
  display: fixed;
  background-color: skyblue;

  &::after {
    clear: both;
    display: block;
    content: "";
  }
`;

export const Menu = styled.div``;

export const Main = styled.div`
  width: calc(100% - 200px);
  float: left;
  background-color: pink;

  &::after {
    clear: both;
    display: block;
    content: "";
  }
`;

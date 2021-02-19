import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;

export const Sidebar = styled.div`
  padding: 20px;
  width: 200px;
  height: 100%;
  float: left;
  position: fixed;
  border-right: ${({ theme }) => `1px solid ${theme.color.grey_8}`};

  &::after {
    clear: both;
    display: block;
    content: "";
  }
`;

export const Menu = styled.div`
  color: ${({ theme }) => theme.color.grey_8};
  /* ${(props) => props.theme.media.tablet`
    color: red;
    font-size: 20px;
  `}; */
  & + & {
    margin-top: 20px;
  }
`;

export const Main = styled.div`
  width: calc(100% - 200px);
  height: 100%;
  margin-left: 200px;
  padding: 20px;
  float: left;
  background-color: ${({ theme }) => theme.color.grey_2};

  &::after {
    clear: both;
    display: block;
    content: "";
  }
`;

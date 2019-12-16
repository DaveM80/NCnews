import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  justify-content: flex-start;
  flex-wrap:wrap;
  top: 0;
  background-color: #282c34;
  box-shadow: 0px 0px 5px #5b7587;
  width: 100vw;
  div {
    p {
      text-align: left;
    }
    a{
      display: flex;
  flex-direction: row;
      justify-content: space-around;
    }
  }
`;

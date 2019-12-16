import styled from "styled-components";
export const StyledTopNav = styled.div`

  margin: 0%;
  padding: 0%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80vw;
  @media only screen and (max-width: 600px) {
  width: 99vw;
  padding-left:50%;
  overflow-y: scroll;
  }
  a:link{
    border-radius:5px;
    border:none;
    color: hotpink;
    text-shadow: 0 0 5px pink;
    font-size: 35px;
    font-weight:bolder;
    padding:1%;
    transition: all .2s ease-in-out; 
  }
  a:visited{
    border-radius:5px;
    text-decoration: none;
    color: hotpink;
    text-shadow: 0 0 10px white;
    transform: scale(1.3);
  }
  a:hover,  a:active{
    border-radius:5px;
    text-decoration: none;
    color: white;
    text-shadow: 0 0 10px white;
    transform: scale(1.3);
  }
`;

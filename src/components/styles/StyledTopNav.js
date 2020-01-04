import styled from "styled-components";
export const StyledTopNav = styled.div`

  margin: 0%;
  padding: 0%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80vw;
  @media only screen and (max-width: 600px) {
  display: flex;
  flex-direction: column;
  width: 99vw;
  overflow-y: scroll;
  overflow-x: hidden; 
  max-height: 5px;
  padding-top: 100px;
  ::-webkit-scrollbar {
        -webkit-appearance: none;
        width: 7px;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: hotpink;
        -webkit-box-shadow: 0 0 10px white;
    }
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
    transform: scale(1.2);

  }
`;

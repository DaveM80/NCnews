import styled from "styled-components";
export const StyledTopNav = styled.div`


  border: 1px white solid;
  margin: 2%;
  display:${props=>props.isClosed ? "none" : "flex"};
  flex-direction:column;

  background-color: #282c34;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  max-width: 100%;

  height: 400px;
  max-height: 100%;


  ul {
    display:flex;
    padding:0;
    list-style: none;
    font-size: 40px;
    flex-direction: column;

    a{
      text-decoration: none;
    }
    li {
      color: hotpink;
      font-weight: bolder;
    }
    li :visited{
      color: hotpink;
      font-weight: bolder;
    }
    li :hover{
      color: #097bf4;
      font-weight: bolder;
      font-size: 45px;
    }
    li :active{
      color: #097bf4;
      font-weight: bolder;
    }
  }




`;

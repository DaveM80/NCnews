import styled from "styled-components";

export const StyledVoteBlock = styled.div`

  display: flex;
  justify-content: space-around;
  flex-direction: ${props => props.dir};
  /* max-height:${props => props.dir === "column" ? "70%": ""}; */
  /* max-width:${props => props.dir === "row" ? "50%": ""}; */


  margin:1%;
  font-weight:bolder;
  align-self:center;


  button{
    width: 36px;
    height:30px;
    border-radius:5px;
    border:none;
    background :#097bf4; 
    box-shadow: 0 0 5px #5b7587;
    color: white;
    text-shadow: 0 0 5px white;
    font-size: 20px;
    font-weight:bolder;
    }
    p{
      color:${props =>  props.votes<0 ? "#097bf4" :"hotpink"};
      /* padding:${props => props.dir === "column" ? "0px 0px" : "0px 35px"}; */
    }
}
    div{
      button{
        background:hotpink;
      }
  }

`;

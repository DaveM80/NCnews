import styled from 'styled-components';

export const StyledCommentCard = styled.li`

display:flex;
flex-direction: row;

list-style:none;
box-shadow: 0px 0px 5px #5b7587;
border-radius: 5px;
margin: 2%;
padding:5%;

div.commentHeader{
display:flex;
flex-direction: row; 
align-items:center;
align-content: center;
justify-content:space-around;
margin: 0%;

p{
    margin:0%;
    margin-block-end: 0%;
    font-weight:bolder;
}
time{
    margin-block-end: 0%;
    font-weight:bolder;
    
}
button{
    background: none;
    border: none;
    width: 36px;
    height:30px;
}
}
div.commentBody{
    display:flex;
    flex-direction:column;
    text-align:left;
    align-content: left;
    margin-left: 7%;
   

}

`

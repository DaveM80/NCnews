import styled from 'styled-components';

export const StyledCommentCard = styled.li`

display:flex;
flex-direction: row;
width: 90vw;
list-style:none;
box-shadow: 0px 0px 5px #5b7587;
border-radius: 5px;
margin: 2%;
padding:2rem;
div.commentHeader{
    @media  only screen and (max-width: 480px)  {
        width: 70vw;
    }
width: 80vw;
display:flex;
flex-direction: row; 
justify-content: space-between;

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

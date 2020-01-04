import styled from 'styled-components';


export const StyledSingleArticlePage = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
padding-top:10%;

@media only screen and (max-width: 600px) {
    padding-top:50%;
    padding-left: 0px;
  }
img{
    align-self:center;
    max-width: 70%;
}
p{
    margin: 3%;
}
body {
    color: blue;
}

button.postCommentButton{
    height:30px;
    border-radius:5px;
    border:none;
    background :hotpink; 
    box-shadow: 0 0 5px #5b7587;
    color: white;
    text-shadow: 0 0 5px white;
    font-size: 16px;
    font-weight:bolder;
}
button.postCommentButton:active{
    background :#097bf4; 

}
`

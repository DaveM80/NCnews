import styled from 'styled-components';


export const StyledSorter = styled.form`

display:flex;
flex-direction: row;
justify-content: space-around;
width: 99vw;

@media only screen and (min-width: 480px) {
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
}
div.orderDirRadio{
    display:flex;
    flex-direction: column; 
    align-items: flex-end;
}
margin:1%;
  font-weight:bolder;
  align-self:center;


  button{
    height:30px;
    border-radius:5px;
    border:none;
    background :#097bf4; 
    box-shadow: 0 0 5px #5b7587;
    color: white;
    text-shadow: 0 0 5px white;
    font-size: 16px;
    font-weight:bolder;
    }
    select{
        background:#282c34;
        border-radius:5px;
        box-shadow: 0 0 5px #5b7587;
        border:none;
        color: white;
        text-shadow: 0 0 5px white;
        font-size: 16px;
        font-weight:bolder;

        option{
            font-size: 16px;
            font-weight:bolder;
        }
    }
`

import styled from "styled-components";

export const StyledErrorPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
    align-content: center;
    padding-top: 15%; 
  img{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    height: 100%;
    width: 300px;
    object-fit: cover;
  }
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    padding-top: 45%; 
    img{
padding-top:20%;
    }
  }
`;

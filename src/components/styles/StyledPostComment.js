import styled from "styled-components";
export const StyledPostComment= styled.div`




  border: 1px white solid;
  margin: 2%;
  display: ${props => (props.isClosed ? "none" : "flex")};
  flex-direction: column;

  background-color: #282c34;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  max-width: 100%;

  height: 400px;
  max-height: 100%;
`;

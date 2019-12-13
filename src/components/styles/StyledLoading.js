import styled from "styled-components";

export const StyledLoading = styled.div`
.lds-ellipsis div {
  display:flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 39%;
  position: absolute;
  top: 50%;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: skyblue;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px; 
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
    background: hotpink;
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
    background: hotpink;
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
    background: hotpink;
  }
}



}
`;

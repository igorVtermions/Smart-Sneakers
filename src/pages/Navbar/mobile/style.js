import styled from "styled-components";

export const MobileContainer = styled.header`
  display: none;
  align-items: center;
  width: 95%;
  justify-content: space-between;

.menubtn{
    font-size: 50px;
    color: white;
    background-color: transparent;
    border: none;
    font-weight: bolder;
}

.btnNav{
  gap: 30px;
}

.Overlay{
  background-color: transparent;
}

  @media(max-width: 900px){
    display: flex;
  }
  @media(max-width: 500px){
    .menubtn{
      font-size: 40px;
    }
  }
`
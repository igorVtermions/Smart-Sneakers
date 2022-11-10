import styled from "styled-components";

export const Container = styled.footer`
    background-color: #191A19;
    z-index: 100;
    border-top: 2px solid;
    margin-top: 30px;
  

  .logo-footer p{
 color: white;
}

.logo-footer img{
  width: 350px;
}

.footer01{
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;
}

.icons{
  gap: 20px;
  display: flex
}

.icons a{
  color: white;
}

.footer2{
  color: white;
  background-color: #222020;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-weight: bolder;
}
`
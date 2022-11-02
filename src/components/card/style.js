import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    color: black;
    width: 25rem;
    height: 35rem;
    
    
    
    img{
        width: 300px;
        border-bottom: 2px solid black;
    }

   p{
    font-weight: bolder;
   }

   .price{
    font-size: 25px;
    margin: 15px;
   }

   .btn{
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: space-between;
   }

   ion-icon{
    color: red;
    font-size: 30px;
    cursor: pointer;
   }

   button{
    padding: 10px;
    font-size: 15px;
    font-weight: bolder;
    background-color: transparent;
    cursor: pointer;
    border-radius: 10px;
    transition: all .3s ease-in-out;
   }
   button:hover{
       background-color: #0090cb;
       color: white;
       border: 2px solid #0090cb;

   }
`
import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 80vh;
    

    img{
        width: 35rem;
    }

    .login{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border: 2px solid white;
        padding: 10px;
        border-radius: 10px;
    }

    h2{
        margin-bottom: 10px;
    }

    .content{
        display: flex;
        flex-direction: column;
        padding: 10px;
    }
    input{
        padding: 10px;
        border-radius: 10px;
        border: none;
      
    }
    
    label{
        margin-top: 10px;
    }

    .chk{
        display: flex;
        padding: 5px;
        align-items: center;
        margin-top: 10px;
    }
    p{
        margin-left: 5px;
    }
    .btn{
        padding: 10px;
        border: 2px solid white;
        border-radius: 10px;
        font-weight: bolder;
        font-size: 20px;
        cursor: pointer;
        transition: all .4s ease-in-out;
        color: white;
        background-color: transparent;

    }

    .btn:hover{
        background-color: #0090cb;
    }

    .register{
        margin-top: 10px;
    }

    @media(max-width: 500px){
        .logo{
            display: none;
        }
    }
`
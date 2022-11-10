import styled from "styled-components";

export const Container = styled.section`
color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10vh;

    img{
        width: 550px;
        border-right: 2px solid ;
    }
    .cardModal{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
    }

    .content{
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 35rem;
        height: 20rem;
        padding: 10px;
    }

    h2{
        font-weight: bolder;
        font-size: 50px;
        margin-top: 15px;
        margin-bottom: 15px;
    }
    p{
        font-size: 20px;
        font-weight: bolder;
        
    }

    button{
        padding: 10px;
    }

    .btnSizes{
        font-weight: bolder;
        background-color: transparent;
        margin: 5px ;
        cursor: pointer;
        border-radius: 10px;
        transition: all .2s ease-in-out;
    }

    .btnSizes:hover{
        color: white;
        background-color:#0090cb ;
    }

    .btn{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 50px;
        
    }

    #heart{
        color: red ;
        font-size: 35px;
        cursor: pointer;
    }

    .btnCart{
        margin-left: 25px;
        margin-right: 55px;
    }


    .btnTrade{
        background-color: transparent;
        margin-right: 5px;
        font-size: 15px;
        font-weight: bolder;
        border-radius: 10px;
        cursor: pointer;
        width: 200px;

    }

    #cartBtn{
        transition: all .3s ease-in-out;
    }

    #cartBtn:hover{
        color: #0090cb;
        border: 2px solid #0090cb;
    }

    #moneyBtn{
        transition: all .3s ease-in-out;
    }

    #moneyBtn:hover{
        color: green;
        border: 2px solid green;
    }

    .delivery{
        display: flex;
        align-items: center;
        justify-content: center;margin-top: 7vh;
    }

    .imgDeli{
        width: 75px;
        border: none;
    }

    .cardCredit{
        font-size: 14px;
        margin-bottom: 20px;
        color: #0090cb;
    }

    .textDelivery{
        font-size: 15px;
        color: #0090cb;
        margin-left: 5px;
    }
`
import styled from "styled-components";

export const Container = styled.section`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        

    .carousel{
        margin-top: 120px;   
        border-radius: 10px ;
    }

    .slider-container{
        width: 75rem;
    }

    .content{
        border-top: 2px solid white;
        margin-top: 30px;
        width: 100%;
    }

    h2{
        padding: 20px;
    }

    .card{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
        width: 99%;
        
    }

    

    .container{
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
        font-size: 20px;
        color: #0090cb;
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
    }

    @media(max-width: 1030px){
        .carousel img{  
            width: 1000px;
        }
        .slider-container{
            width: 60rem;
        }
    }
    @media(max-width: 770px){
        .carousel img{  
            width: 700px;
        }
        .slider-container{
            width: 43rem;
        }
    }

    @media(max-width: 500px){
        .carousel img{  
            width: 450px;
        }
        .slider-container{
            width: 27rem;
        }
        .card{
            margin-left: 7%;
            width: 85%;
        }
    }

    @media(max-width: 400px){
        .carousel img{  
            width: 370px;
        }
        .slider-container{
            width: 23rem;
        }
        .card{
            margin-left: 7%;
            width: 85%;
        }
    }

`
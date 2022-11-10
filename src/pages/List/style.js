import styled from "styled-components";

export const Container = styled.section`

    display: flex;
    
   
    h2{
        padding: 10px;
    }

    .card{
       
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 5px;
        margin-top: 50px;
        width: 100rem;
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
        width: 23rem;
        height: 33rem;
    
    
    
        img{
            width: 15rem;
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
            margin-top: 3vh;
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

    .sideMenu{
        margin-top: 5vh;      

        .content{
             border: 2px solid white;
             border-radius: 10px 5px 10px 5px;
            background-color: #222020;  
            width: 15rem;
            height: 40rem;
            display: flex;
            flex-direction: column;
            justify-content: center;     
        }

    

        .filterValue{
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 10px;
            margin-left: 5px;
            
        }

        .chk{
            width: 20px;
            height: 15px;  
        }
        
        h3{
            padding: 10px;
        }

        .filterBrand{
            padding: 10px;
            display: flex;
            flex-direction: column;
        }

        .btn{
            padding: 10px;
            margin: 5px;
            background-color: transparent;
            color: white;
            font-size: 15px;
            font-weight: bolder;
            border-radius: 10px 5px 10px 5px;
            border-color: white;
            cursor: pointer;
            transition: all .3s ease-in-out;
        }

        .btn:hover{
            background-color: #0090cb;
        }
    }

`
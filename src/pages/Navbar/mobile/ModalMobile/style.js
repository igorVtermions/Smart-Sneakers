import styled from "styled-components";

export const Container = styled.section`
margin-top:160px;


.contentModal{
    margin-top: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    gap: 50px;
}

.menubtn{
    font-size: 50px;
    color: white;
    background-color: transparent;
    border: none;
    font-weight: bolder;
}

.btn{
    padding: 10px;
    width: 100px;
    font-size: 30px;
    font-weight: bolder;
    cursor: pointer;
    transition: all .4s ease-in-out;
    display: flex;
    align-items: center;
    color:  #0090cb; 
    justify-content: center;
    border-bottom: 2px solid #0090cb;
}

ul{
    display: flex;
    flex-direction: column;
    gap: 20px;
}

li{
    list-style-type: none;
    font-size: 20px;
    font-weight: bolder;
    padding: 5px;
    cursor: pointer;
    color: white;
    border-bottom: 2px solid white;
}

a{
    color: white;
    text-decoration: none;
}

.search{
    background-color: transparent;
    border: none;
    font-size: 20px;
    border-bottom: 2px solid white;
    padding: 10px;
}

`
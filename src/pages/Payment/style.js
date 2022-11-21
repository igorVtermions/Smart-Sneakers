import styled from "styled-components";

export const Container = styled.section`
padding-top: 13vh;
display: flex;
align-items: center;
justify-content: center;

.content{
background-color: #222020;
padding: 20px;
border-radius: 10px 5px 10px 5px;
display: flex;
flex-direction: column;
align-items: center;
}

.context{
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.contextInfo{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
}

label{
    margin-left: 5px;
}

.info{
    padding: 10px;
    border-radius: 10px;
    border: 2px solid white;
    margin-bottom: 10px;
    background-color: transparent;
}

.btn{
    padding: 10px;
    background-color: transparent;
    color: white;
    margin-top: 40px;
    font-size: 20px;
    font-weight: bolder;
    border-radius: 10px;
    border-color: white;
}

`
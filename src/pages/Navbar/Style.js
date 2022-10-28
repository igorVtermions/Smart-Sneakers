import styled from "styled-components";

export const Nav = styled.header`
    border-bottom: 1px solid ;
    height:  6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

nav{
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

}

ul{
    display: flex;
    justify-content: space-between;
    margin-left: 30px;
}

li{
    list-style-type: none;
    margin-left: 10px;
    font-size: 20px;
    font-weight: bolder;
}



a{
    color: white;
    text-decoration: none;
    transition: all .4s ease-in-out;
}
a:hover{
    color: #0090cb;
}


.NavLinks{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
}

img{
    width: 8rem;
}

.search{
    padding: 10px;
    border-radius: 10px;
}

.btn{
    padding: 10px;
    margin-right: 10px;
    border-radius: 10px;
    width: 100px;
    font-size: 17px;
    font-weight: bolder;
    cursor: pointer;
    transition: all .4s ease-in-out;
}

.btn:hover{
    color: white;
    background-color: #0090cb;
}



`
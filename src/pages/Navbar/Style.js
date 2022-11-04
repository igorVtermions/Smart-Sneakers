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
    transition: all .4s ease-in-out;
    padding: 5px;
    cursor: pointer;
}

li:hover{
    border-radius:3px;
    border-bottom: 3px solid #0090cb; 
    color: #0090cb;
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
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
}

.btn:hover{
    color: white;
    background-color: #0090cb;
}

.btnNav{
    display: flex;
    align-items: center;
}

.cart{
    padding: 10px;
    font-size: 30px;
    color: white;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: all .3s ease-in-out;
}

.cart:hover{
    color: green;
}



`
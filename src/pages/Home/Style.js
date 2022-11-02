import styled from "styled-components";

export const Container = styled.section`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

    .carousel{
        margin-top: 10px;   
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
`
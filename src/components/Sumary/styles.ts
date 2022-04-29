import styled from "styled-components";


export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -7rem;
   

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        box-shadow: 2px 2px 10px rgba(0,0,0,0.3);
        transition: 0.3s;
    }

    div:hover{
        transform: translateY(3px);
    }

    .hightLight-background{
        background: var(--green);
        color: #fff;
    }

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: normal;
        line-height: 3rem;
        
    }

`
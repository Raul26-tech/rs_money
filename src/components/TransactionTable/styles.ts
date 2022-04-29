import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    max-width: 1100px;
    background: var(--background);

    table {
        width: 100%;
        margin: 0 6.25rem;
        align-items: center;
        text-align: left;
        padding: 2.5rem 1.5rem;
        border-collapse: collapse;
    } 

    thead {
        padding: 1rem 2.5rem;
        color: var(--text-body);
        border-spacing: 1rem 2.5rem;
    }

    tr,th, td {
        text-align: left;
        padding: 20px;
    }

    td:last-child{
        color: var(--text-body);
    }

    tbody{
        background: #fff;
        margin: 1rem;
    }

    .deposit {
        color: var(--green);
    }

    .withdraw {
        color: var(--red);
    }


    @media screen and (max-width: 1215px) {
        .resposivity{
            display: block;
            overflow-x:auto;
        }
    }

`
import styled from "styled-components";

export const Conatiner = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2.5rem 1rem;
  background: #835afd;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: -0.75rem auto;
  margin-bottom: 2rem;
  

  img {
    margin-bottom: 2rem;
    width: 36px;
    height: 36px;
  }

  button {
    width: 12%;
    height: 36px;
    text-align: center;
    align-items: center;
    float: right;
    background: rgba(135, 206, 23);
    color: #fff;
    border: 0;
    border-radius: 10px;
    transition: 0.3s;
  }

  button:active {
    transform: translateY(3px);
  }

  button:hover {
    background: rgba(135, 206, 30, 0.5);
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  background: white;
  border: 1px solid black;
  padding: 1rem;
  max-width: 10rem;
  margin: 1rem;

  img {
    max-width: 25px;
    margin-bottom: 10px;
  }

  span {
    text-align: center;
    margin-bottom: 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const DiminuteInfo = styled.div`
  font-size: 0.75rem;
  margin: 10px 0;
`;

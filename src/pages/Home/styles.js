import styled from "styled-components";

export const Container = styled.div`
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem;
  }

  @media (max-width: 768px) {
    .hidden {
      display: none;
    }
  }

  img {
    width: 5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

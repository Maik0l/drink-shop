import styled from "styled-components";

export const Container = styled.div`
  background: var(--darkpurple);
  height: 3rem;

  ul {
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    a {
      color: var(--purple);
    }
  }
  span a {
    color: #fff6ff;
    font-weight: bold;
    padding: 0.5rem;
    font-size: 1.5rem;
  }
`;

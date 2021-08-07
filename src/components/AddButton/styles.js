import styled from "styled-components";

export const Button = styled.button`
  background: var(--darkpurple);
  padding: 0.5rem 0.75rem;
  margin-top: 10px;
  color: white;
  font-variant: small-caps;
  font-family: "Lato", sans-serif;
  border: 1px solid white;
  outline: none;

  :hover {
    background-color: var(--purple);
    transition: 0.4s;
  }
`;

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    :root {
        --lightpurple: #b0a8b9;
        --purple: #8A43FF;
        --darkpurple: #4b4453;
        --red: #ef0000;
    }

    body {
        background: var(--lightpurple);
        font-family: 'Georama', sans-serif;
    }

    button {
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    p {
        font-family: 'Lato', sans-serif;
    }
`;

export default GlobalStyle;

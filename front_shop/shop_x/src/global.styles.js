import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`  
  a{
    text-decoration: none;
    color: black;
  }

  body{
    font-family:'Open Sans Condensed';
    @media screen and (max-width: 800px) {
        padding: 10px;
    }
  }

  *{
      box-sizing:border-box;
  }
`;
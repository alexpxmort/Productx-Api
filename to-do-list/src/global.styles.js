import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  a{
    text-decoration: none;
    color: black;
  }

  body{
    font-family: 'Roboto', sans-serif;
    font:100%;
    font-size:1.25em;
    @media screen and (max-width: 800px) {
        padding: 10px;
    }
		background-color:${props => props.theme.colors.primary};;
  }

  *{
    box-sizing:border-box;
	  padding:0;
	  margin:0;
  }
`;

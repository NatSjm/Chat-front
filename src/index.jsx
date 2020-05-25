import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import * as theme from 'theme';

const GlobalStyle = createGlobalStyle`
*{
box-sizing: border-box;
margin: 0;
padding: 0;
}
  html {
  //height: 100%;
   }
  body {
    height: 100%;
    margin: 0;
    background-color: #E7EBF0;
    color: ${props => props.theme.colors.white};  
    font-family: Roboto  sans-serif;
    font-weight: 300;
    font-size: 18px;   
      }
`;


ReactDOM.render(
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App/>
    </ThemeProvider>,
    document.getElementById('root')
);

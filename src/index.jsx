import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App/App.jsx';
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
    background-color: ${props => (props.primary ? props.theme.colors.primaryPurple : props.theme.colors.secondaryPurple)};  
    color: ${props => props.theme.colors.white};  
    font-family: Robotto sans-serif;
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

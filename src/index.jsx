import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import * as theme from 'theme';

const GlobalStyle = createGlobalStyle`
  html {
  height: 100%;
  font-size: 16px;
  margin: 0;
  }
  body {
    height: 100%;
    margin: 0;
    background-color: ${props => (props.primary ? props.theme.colors.primaryPurple : props.theme.colors.secondaryPurple)};  
    color: ${props => props.theme.colors.white};  
      }
`;


ReactDOM.render(
    <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <App/>
    </ThemeProvider>,
    document.getElementById('root')
);

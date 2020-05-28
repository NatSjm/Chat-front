import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import {ThemeProvider} from 'styled-components';
import * as theme from 'theme';
import GlobalStyle from './globalStyle.js';



ReactDOM.render(
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App/>
    </ThemeProvider>,
    document.getElementById('root')
);

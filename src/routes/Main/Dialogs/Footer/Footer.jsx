//import React from 'react';
import styled from 'styled-components';
import {Flex} from 'components/Block';


const Footer = styled(Flex)`
    min-height: 120px;
    border-top: 1px solid rgba(120, 109, 134, 0.2);
    margin-top: auto;
    z-index: 20;
    flex-direction: row;
    justify-content: space-around;   
    align-items: center;
    & button{
    width: auto;
    padding: 14px;
    margin: 5px;
   // width: 160px;
    }
   
    
`;
export default Footer;

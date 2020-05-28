import styled from 'styled-components';
import Primary from '../Primary';

const Cover = styled(Primary)`
	position: absolute;	
	background-color: rgba(128, 128, 128, 0.3);
	transition: all .1s linear;
	width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    z-index: 50;
   
   // display: none;
`;

export default Cover;

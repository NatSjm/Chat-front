import styled from 'styled-components';
import Primary from '../Primary';

const Mask = styled(Primary)`
	position: absolute;
	flex-direction: column;
	justify-content: space-around;
	background-color: rgba(0, 0, 0, 0.3);
	transition: all .1s linear;
	width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    z-index: 50;
    padding: 10px;   
   // display: none;
`;

export default Mask;

import styled from 'styled-components';
import Cover  from './Cover.jsx';



const OptionsCover = styled(Cover)`
    flex-wrap: nowrap;
    flex-direction: column;
	justify-content: space-around;	
	transition: all 0.2s linear ;
	 
	width: 46px;
	padding: 10px;
		& button{
    	margin: 10px;   	
       }
`;

export default OptionsCover;

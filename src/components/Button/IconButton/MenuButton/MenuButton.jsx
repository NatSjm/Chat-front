import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import IconButton from '../IconButton.jsx';


const Wrapper = styled(IconButton)`
	width: 48px;
	height: 48px;
	border-radius: 50%;
   
    
	
	${({theme: {icons, colors}, ...props} ) => {
    return `
			font-size: ${icons.hamburger.fontSize};
			border: 2px solid ${icons.hamburger.borderColor};
			background-color: ${props.modeCreate ? colors.blue : 'transparent'};
			&:hover{
			border-color: ${icons.iconPrimary.hoverColor};
			
			}
				`
}}
`;
const MenuButton = ({...props}) => (
    <Wrapper {...props}>
        <FontAwesomeIcon icon={faPlus}/>
    </Wrapper>
);
export default MenuButton;

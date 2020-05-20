import React from 'react';
import styled from 'styled-components';
import IconButton from '../IconButton.jsx';
import {Hamburger} from 'components/Icon'

const Wrapper = styled(IconButton)`
	width: 48px;
	height: 48px;
	border-radius: 50%;
	
	${({theme: {icons}}) => {
    return `
			font-size: ${icons.hamburger.fontSize};
			border: 2px solid ${icons.hamburger.borderColor};
			&:hover{
			border-color: ${icons.iconPrimary.hoverColor};
			}
				`
}}
`;
const MenuButton = () => (
    <Wrapper>
        <Hamburger/>
    </Wrapper>
);
export default MenuButton;

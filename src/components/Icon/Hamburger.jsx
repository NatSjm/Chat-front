import React from 'react';
import styled from 'styled-components';
import {IconButton} from 'components/Button';
import Icon from './Icon'

const Wrapper = styled(IconButton)`
	width: 40px;
	height: 40px;
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
const Hamburger = () => (
    <Wrapper>
        <Icon icon="bars"/>
    </Wrapper>
);
export default Hamburger;


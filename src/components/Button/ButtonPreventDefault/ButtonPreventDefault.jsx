import React from 'react';
import styled from 'styled-components';
import Button from '../Button.jsx';

const Wrapper = styled(Button)`;
	cursor: pointer;
	text-transform: uppercase;
	text-align: center;
	border: 1px solid transparent;
	outline: none!important;
	&:active,
	&:focus {
	outline: none!important;
	}
`;

let ButtonPreventDefault = ({ onClick, ...props }) => {
	return <Wrapper { ...props }
					onClick={(e) => {
						e.preventDefault();
						onClick(e);
					}} />;
};

ButtonPreventDefault = React.memo(ButtonPreventDefault);
ButtonPreventDefault.defaultProps = {
	onClick: () => {},
};
export default ButtonPreventDefault;

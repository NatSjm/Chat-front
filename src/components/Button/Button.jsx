import styled from 'styled-components';

const Button = styled.button`
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

export default Button;

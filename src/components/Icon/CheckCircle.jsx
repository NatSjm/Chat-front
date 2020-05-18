import styled from "styled-components";
import Icon from "./Icon";
import {IconButton} from 'components/Button';
import React from "react";

const Wrapper = styled.div`
	width: 1rem;
	height: 1rem;
	font-size: 0.6rem;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	
	${({theme: {icons: {checkCircle}}}) => {
    return `background-color: ${checkCircle.backgroundColor};   
 `
}}
	 &:hover{
        opacity: 0.7;
    }
`;
const CheckCircle = () => (
    <Wrapper>
        <Icon icon="check"/>
    </Wrapper>
);
export default CheckCircle;

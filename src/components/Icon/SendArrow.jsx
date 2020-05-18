import styled from "styled-components";
import Icon from "./Icon";
import {IconButton} from 'components/Button';
import React from "react";

const Wrapper = styled(IconButton)`
		border-radius: 50%;
	${({theme: {icons: {sendArrow}}}) => {
    return `
    width: ${sendArrow.wrapperSize};
	height: ${sendArrow.wrapperSize};
    background-color: ${sendArrow.backgroundColor};
    font-size:  ${sendArrow.fontSize};
    transform: rotate(${sendArrow.rotate});
    & svg{
    color: ${sendArrow.color};
    }
 `
}}
`;
const SendArrow = () => (
    <Wrapper>
        <Icon icon="location-arrow"/>
    </Wrapper>
);
export default SendArrow;

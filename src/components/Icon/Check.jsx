import styled from "styled-components";
import Icon from "./Icon";
import React from "react";

const Wrapper = styled.span`
    
	${({theme: {colors}}) => {
    return `color: ${colors.fontColor};
    font-size: 0.7rem;
 `
}}
`;
const Check = () => (
    <Wrapper>
        <Icon icon="check"/>
    </Wrapper>
);
export default Check;

import styled from "styled-components";
import Icon from "./Icon";
import {IconButton} from 'components/Button';
import React from "react";

const Wrapper = styled(IconButton)`
	font-size :  2rem;
`;
const Smile = () => (
    <Wrapper>
        <Icon icon={['far', 'smile']}/>
    </Wrapper>
);
export default Smile;

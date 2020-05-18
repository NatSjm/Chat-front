import styled from "styled-components";
import Icon from "./Icon";
import {IconButton} from 'components/Button';
import React from "react";

const Wrapper = styled(IconButton)`
transform: rotate(315deg);
font-size: 1.6rem;
`;
const PaperClip = () => (
    <Wrapper>
        <Icon icon="paperclip"/>
    </Wrapper>
);
export default PaperClip;

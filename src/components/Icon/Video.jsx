import styled from "styled-components";
import Icon from "./Icon";
import {IconButton} from 'components/Button';
import React from "react";

const Wrapper = styled(IconButton)`
	width: 86px;
    height: 100%;
	border-left: 2px solid rgba(120, 109, 134, 0.2);
	font-size: 1.4rem;
	margin-left: auto;
`;
const Video = () => (
    <Wrapper>
        <Icon icon="video"/>
    </Wrapper>
);
export default Video;

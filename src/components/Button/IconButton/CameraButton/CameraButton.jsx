import React from 'react';
import styled from 'styled-components';
import IconButton from '../IconButton.jsx';
import {Video} from 'components/Icon'


const Wrapper = styled(IconButton)`
	width: 108px;
    height: 100%;
	border-left: 2px solid rgba(120, 109, 134, 0.2);
	font-size: 1.4rem;
	margin-left: auto;
`;
const CameraButton = () => (
    <Wrapper>
        <Video/>
    </Wrapper>
);
export default CameraButton;

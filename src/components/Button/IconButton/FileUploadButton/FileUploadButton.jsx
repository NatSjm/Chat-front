import React from 'react';
import styled from 'styled-components';
import IconButton from '../IconButton.jsx';
import {PaperClip} from 'components/Icon';


const Wrapper = styled(IconButton)`
transform: rotate(315deg);
font-size: 1.6rem;
`;
const FileUploadButton = () => (
    <Wrapper>
        <PaperClip/>
    </Wrapper>
);
export default FileUploadButton;

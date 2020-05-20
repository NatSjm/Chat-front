import React from 'react';
import styled from 'styled-components';
import IconButton from '../IconButton.jsx';
import {Smile} from 'components/Icon'


const Wrapper = styled(IconButton)`
	font-size :  2rem;
`;
const EmojiButton = () => (
    <Wrapper>
        <Smile/>
    </Wrapper>
);
export default EmojiButton;

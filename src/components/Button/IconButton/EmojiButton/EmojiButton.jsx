import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {far} from '@fortawesome/free-regular-svg-icons';

import IconButton from '../IconButton.jsx';

const Wrapper = styled(IconButton)`
	font-size :  2rem;
`;
const EmojiButton = () => (
    <Wrapper>
        <FontAwesomeIcon icon={far.faSmile}/>
    </Wrapper>
);
export default EmojiButton;

import React from 'react';
import styled from 'styled-components';
import IconButton from '../IconButton.jsx';
import {SendArrow} from 'components/Icon'


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
const MessageSendButton = () => (
    <Wrapper>
        <SendArrow/>
    </Wrapper>
);
export default MessageSendButton;

import React from "react";
import styled from 'styled-components';
import {Primary} from 'components/Block';
import {FileUploadButton, MessageSendButton, EmojiButton} from 'components/Button';
import {MessageTextArea} from 'components/TextArea';
import onSubmitFunc from './onSubmit.js';


const Wrapper = styled(Primary)`
    min-height: 90px;
    border-top: 1px solid rgba(120, 109, 134, 0.2);
    padding: 20px 30px;
    flex-direction: row;
    width: 100%;
     & button{
     margin-right: 20px;
     &:last-of-type{
     margin-right: 0;
     margin-left: 20px;
     }
    }
    & textarea{
    font-size: 1.2rem;
    padding-right: 20px;
    padding-left: 20px;
     ${({theme: {colors}}) => {
    return `
        color: ${colors.fontColor};  
        &::placeholder{
        color: ${colors.fontColor};  
        }     
    `;
}}  
    }
`;

const Footer = ({ dialogId, action }) => {
    const onSubmit = React.useCallback((...rest) => onSubmitFunc(...rest, dialogId, action), [
        dialogId,
        action,
    ]);

    return <Wrapper>
        <form onSubmit={onSubmit}>
            <FileUploadButton/>
            <MessageTextArea
                name="body"
                placeholder="Type your message..." />
            <EmojiButton/>
            <MessageSendButton type="submit" />
        </form>
    </Wrapper>;

};

export default React.memo(Footer);

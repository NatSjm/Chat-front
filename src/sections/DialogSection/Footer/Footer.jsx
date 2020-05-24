import React from "react";
import styled from 'styled-components';
import {Primary} from 'components/Block';
import {FileUploadButton, MessageSendButton, EmojiButton} from 'components/Button';
import {Primary as PrimaryInput} from 'components/Input';


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
    & input{
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

const Footer = () => (
    <Wrapper>
        <FileUploadButton/>
        <PrimaryInput
            placeholder="Type your message..."
            type="text"/>
        <EmojiButton/>
        <MessageSendButton/>
    </Wrapper>

);

export default React.memo(Footer);

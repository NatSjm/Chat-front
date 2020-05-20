import styled from 'styled-components';
import React from 'react';
import  ChatHeaderWrapper  from 'components/ChatComponents/ChatHeaderWrapper.jsx';
import {Search} from 'components/Input';
import {Hamburger} from 'components/Icon';


const Wrapper = styled(ChatHeaderWrapper)`
	margin-left: 10px;
	margin-right: 10px;
	padding: 20px;	 
`;
const ContactsHeader = () => (
    <Wrapper>
        <Hamburger/>
        <Search/>
    </Wrapper>
);

export default React.memo(ContactsHeader);


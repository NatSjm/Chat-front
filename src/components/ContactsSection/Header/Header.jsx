import styled from 'styled-components';
import React from 'react';
import Header from 'components/Header';
import {Search} from 'components/Input';
import {Hamburger} from 'components/Icon';


const Wrapper = styled(Header)`
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


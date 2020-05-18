import styled from "styled-components";
import Block from 'components/Block';
import {Container} from 'components/Block';
import ContactsHeader from './Header';
import React from "react";
import ContactsItem from "./ContactsItem";

const Wrapper = styled(Block)`

`;
const ContactsSection = () => (
    <Wrapper>
        <ContactsHeader/>
        <Container>
            <ContactsItem/>
            <ContactsItem/>
            <ContactsItem/>
            <ContactsItem/>
        </Container>
    </Wrapper>
);

export default React.memo(ContactsSection);

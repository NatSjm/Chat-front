import React from "react";
import styled from "styled-components";
import {Primary} from 'components/Block';
import {Avatar} from 'components/Image';
import ContactsItemInfo from './ContactItemInfo.jsx';
import {Paragraph, Headline3} from 'components/Text';


const Wrapper = styled(Primary)`
flex-direction: row;
justify-content: flex-start;
padding-top: 20px;
padding-bottom: 20px;
border-bottom: 2px solid rgba(120, 109, 134, 0.2);
flex-wrap: nowrap;
& h3{
margin-bottom: 10px;
}
`;
const ContactsItem = () => (
    <Wrapper>
        <Avatar/>
        <ContactsItemInfo>
            <Headline3>
                Michael Huddson
            </Headline3>
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At magnam molestiae ratione soluta? At commodi
                dolor doloribus ea earum excepturi fugiat hic, neque nisi nostrum, omnis optio, praesentium quasi quia?
            </Paragraph>
        </ContactsItemInfo>
    </Wrapper>
);

export default React.memo(ContactsItem);

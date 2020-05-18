import styled from "styled-components";
import Block from 'components/Block';
import {Container} from 'components/Block';
import Header from 'components/Header';
import React from "react";
import Footer from './Footer'
import {AvatarSmall} from 'components/Image';
import {Video} from 'components/Icon';
import {Headline3, Paragraph} from 'components/Text';
import {ContactItemInfo} from 'components/ContactsSection';


const Wrapper = styled(Block)`
 ${({theme: {colors}}) => {
    return `
        background-color: ${colors.primaryPurple};
        height: 100vh;
    `;
}}
`;
const DialogSection = () => (
    <Wrapper>
        <Header>
            <AvatarSmall/>
            <ContactItemInfo>
                <Headline3>
                    Michael Huddson
                </Headline3>
                <Paragraph>
                    online
                </Paragraph>
            </ContactItemInfo>
            <Video/>
        </Header>
        <Container>

        </Container>
        <Footer>

        </Footer>
    </Wrapper>
);

export default React.memo(DialogSection);

import styled from "styled-components";
import Block from 'components/Block';
import {Container} from 'components/Block';
import {ChatHeaderWrapper} from 'components/ChatComponents';
import React from "react";
import Footer from './Footer'
import {AvatarSmall} from 'components/Image';
import {CameraButton} from 'components/Button';
import {Headline3, Paragraph} from 'components/Text';

import {BriefTextBlock} from 'components/Block';


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
        <ChatHeaderWrapper>
            <AvatarSmall/>
            <BriefTextBlock>
                <Headline3>
                    Michael Huddson
                </Headline3>
                <Paragraph>
                    online
                </Paragraph>
            </BriefTextBlock>
            <CameraButton/>
        </ChatHeaderWrapper>
        <Container>

        </Container>
        <Footer>

        </Footer>
    </Wrapper>
);

export default React.memo(DialogSection);

import React from "react";
import styled from "styled-components";
import Block from 'components/Block';
import {Flex, BriefTextBlock} from 'components/Block';
import ContentWrapper from './ContentWrapper';
import ChatHeaderWrapper from 'components/ChatHeader';

import Footer from './Footer';
import {AvatarSmall} from 'components/Image';
import {CameraButton} from 'components/Button';
import {Headline3, Paragraph} from 'components/Text';
import ChatMessageBox from './ChatMessageBox';
import Check from 'components/Icon';
import {DialogScroll} from 'components/Scroll';

const Wrapper = styled(Block)`
     ${({theme: {colors}}) => {
	return `
            background-color: ${colors.primaryPurple};
            height: 100%;
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

		<ContentWrapper>
			<DialogScroll>
			<ChatMessageBox myMessage>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi distinctio fugit, iusto
				suscipit
				veritatis? Accusantium debitis explicabo illum ipsa ipsum, necessitatibus nobis nulla officia
				perspiciatis
				provident quaerat repudiandae tenetur.
				<Flex>
					< Check/>
					<span>9:02 pm</span>
				</Flex>
			</ChatMessageBox>
			<ChatMessageBox>
				Lorem ipsum dolor

				<Flex>
					< Check/>
					<span>9:02 pm</span>
				</Flex>
			</ChatMessageBox>
			<ChatMessageBox myMessage>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi distinctio fugit, iusto
				suscipit
				veritatis? Accusantium debitis explicabo illum ipsa ipsum, necessitatibus nobis nulla officia
				perspiciatis
				provident quaerat repudiandae tenetur.
				<Flex>
					< Check/>
					<span>9:02 pm</span>
				</Flex>
			</ChatMessageBox>
			<ChatMessageBox >
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi distinctio fugit, iusto
				suscipit
				veritatis? Accusantium debitis explicabo illum ipsa ipsum, necessitatibus nobis nulla officia
				perspiciatis
				provident quaerat repudiandae tenetur.
				<Flex>
					< Check/>
					<span>9:02 pm</span>
				</Flex>
			</ChatMessageBox>
			</DialogScroll>
		</ContentWrapper>
		<Footer>

		</Footer>
	</Wrapper>
);

export default React.memo(DialogSection);

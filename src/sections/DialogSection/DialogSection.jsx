import React from "react";
import styled from "styled-components";
import  Block, {Flex, BriefTextBlock, Mask} from 'components/Block';
import ContentWrapper from './ContentWrapper';
import ChatHeaderWrapper from 'components/ChatHeader';
import Footer from './Footer';
import {Avatar} from 'components/Image';
import {CameraButton, IconButton} from 'components/Button';
import {Headline3, Paragraph} from 'components/Text';
import ChatMessageBox from './ChatMessageBox';
import Check from 'components/Icon';
import {DialogScroll} from 'components/Scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTrashAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons'


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
			<Avatar single/>
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
					<Check/>
					<span>9:02 pm</span>
				</Flex>
				<Mask>
                  <IconButton>
					  <FontAwesomeIcon icon={faPencilAlt}/>
				  </IconButton>
					<IconButton>
						<FontAwesomeIcon icon={faTrashAlt}/>
					</IconButton>
				</Mask>
			</ChatMessageBox>
			<ChatMessageBox>
				Lorem ipsum dolor

				<Flex>
					<Check/>
					<span>9:02 pm</span>
				</Flex>
				<Mask>
					<IconButton>
						<FontAwesomeIcon icon={faArrowRight}/>
				</IconButton>
					<IconButton>
						<FontAwesomeIcon icon={faTrashAlt}/>
					</IconButton>
				</Mask>
			</ChatMessageBox>
			<ChatMessageBox myMessage>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi distinctio fugit, iusto
				suscipit
				veritatis? Accusantium debitis explicabo illum ipsa ipsum, necessitatibus nobis nulla officia
				perspiciatis
				provident quaerat repudiandae tenetur.
				<Flex>
					<Check/>
					<span>9:02 pm</span>
				</Flex>
				<Mask>
					<IconButton>
						<FontAwesomeIcon icon={faPencilAlt}/>
					</IconButton>
					<IconButton>
						<FontAwesomeIcon icon={faTrashAlt}/>
					</IconButton>
				</Mask>
			</ChatMessageBox>
			<ChatMessageBox >
				Lorem ipsum dolor sit amet, suscipit

				<Flex>
					<Check/>
					<span>9:02 pm</span>
				</Flex>
				<Mask>
					<IconButton>
						<FontAwesomeIcon icon={faArrowRight}/>
					</IconButton>
					<IconButton>
						<FontAwesomeIcon icon={faTrashAlt}/>
					</IconButton>
				</Mask>
			</ChatMessageBox>
			</DialogScroll>
		</ContentWrapper>
		<Footer>

		</Footer>
	</Wrapper>
);

export default React.memo(DialogSection);

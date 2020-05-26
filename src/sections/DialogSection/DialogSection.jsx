import React from "react";
import styled from "styled-components";
import Block from 'components/Block';
import {Flex, BriefTextBlock} from 'components/Block';
import ContentWrapper from './ContentWrapper';
import ChatHeaderWrapper from 'components/ChatHeader';
import Socket from 'components/Socket';
import Footer from './Footer';
import {Avatar} from 'components/Image';
import {CameraButton} from 'components/Button';
import {Headline3, Paragraph} from 'components/Text';
import ChatMessageBox from './ChatMessageBox';
import Check from 'components/Icon';
import {DialogScroll} from 'components/Scroll';
import { Dialogs as ContextDialogs } from 'sections/DialogsListSection/DialogsListSection.jsx';
import { 
	messages as fetchMessagesFunc,
} from 'fetches';

const Wrapper = styled(Block)`
     ${({theme: {colors}}) => {
	return `
            background-color: ${colors.primaryPurple};
            height: 100%;
        `;
}}
    `;
const DialogSection = () => {
	const dialogs = React.useContext(ContextDialogs);
	const [ state, setState ] = React.useState(() => ({
		data: [],
		dialogId: dialogs[0].id,
	}));
	const fetchMessages = React.useCallback((...rest) => fetchMessagesFunc(...rest, setState), [
		setState,
	]);

	React.useEffect(() => {
		Socket().on('connect', () => {
			Socket().emit('messages', { dialogId: state.dialogId });
			Socket().on('messages', fetchMessages);
		});
	}, [
		fetchMessages,
		state.dialogId,
	]);

	return <Wrapper>
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
			{state.data.map((item, i) => {
				return <ChatMessageBox key={i} myMessage={!!item.me}>
					{item.body}
					<Flex>
						<Check />
						<span>{item.createdAt}</span>
					</Flex>
				</ChatMessageBox>;
			})}
			</DialogScroll>
		</ContentWrapper>
		<Footer 
			dialogId={state.dialogId}
			action={setState}>

		</Footer>
	</Wrapper>
};

export default React.memo(DialogSection);

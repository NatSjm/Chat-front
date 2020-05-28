import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import Block,
{BriefTextBlock} from 'components/Block';
import ContentWrapper from './ContentWrapper';
import ChatHeaderWrapper from 'components/ChatHeader';
import Socket from 'components/Socket';
import Footer from './Footer';
import {Avatar} from 'components/Image';
import {CameraButton} from 'components/Button';
import {Headline3, Text} from 'components/Text';
import ChatMessageBox from './ChatMessageBox';
import {DialogScroll} from 'components/Scroll';
import {Dialogs as ContextDialogs} from 'sections/DialogsListSection/DialogsListSection.jsx';
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
	const [state, setState] = React.useState(() => ({
		data: [],
		dialogId: dialogs[0].id,
	}));
	const fetchMessages = React.useCallback((...rest) => fetchMessagesFunc(...rest, setState), [
		setState,
	]);
	const messagesEndRef = useRef(null);

	useEffect(() => {
		messagesEndRef.current.scrollIntoView();
	});

	React.useEffect(() => {
		Socket().on('connect', () => {
			Socket().emit('messages', {dialogId: state.dialogId});
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
				<Text>
					online
				</Text>
			</BriefTextBlock>
			<CameraButton/>
		</ChatHeaderWrapper>

		<ContentWrapper>
			<DialogScroll>
				{state.data.map((item, i) => {
					return <ChatMessageBox key={i}
										   item={item}/>;
				})}
				<div ref={messagesEndRef}/>
			</DialogScroll>
		</ContentWrapper>
		<Footer
			dialogId={state.dialogId}
			action={setState}>
		</Footer>
	</Wrapper>
};

export default React.memo(DialogSection);

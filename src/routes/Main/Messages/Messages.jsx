import React, {useEffect, useRef, useContext} from 'react';
import styled from 'styled-components';
import Block from 'components/Block';
import ContentWrapper from './ContentWrapper';
import Socket from 'components/Socket';
import Footer from './Footer';
import ChatMessageBox from './ChatMessageBox';
import {DialogScroll} from 'components/Scroll';
import Header from './Header';
import {Dialogs as ContextDialogs} from '../Dialogs/DialogsSection.jsx';
import {
	messages as fetchMessagesFunc,
} from 'actions';


const Wrapper = styled(Block)`
     ${({theme: {colors}}) => {
	return `
            background-color: ${colors.primaryPurple};
            height: 100%;
        `;
}}
    `;

const Messages = () => {
	const dialogs = useContext(ContextDialogs);
	const [state, setState] = React.useState(() => ({
		data: [],
	}));
	const fetchMessages = React.useCallback((...rest) => {
		fetchMessagesFunc(...rest, setState)
	}, [
		setState,
	]);
	const messagesEndRef = useRef(null);

	useEffect(() => {
		if (messagesEndRef.current) {
			messagesEndRef.current.scrollIntoView();
		}
	});

	React.useEffect(() => {
		//Socket().on('connect', () => {
			if (dialogs.currentDialog.id > 0) {
				Socket().emit('messages', {dialogId: dialogs.currentDialog.id});
			}
			Socket().on('messages', fetchMessages);

		//});
	}, [
		fetchMessages,
		dialogs.currentDialog.id
		//state.dialogId,
	]);


	return <Wrapper>

		<Header
			dialog={dialogs.currentDialog}
			modeCreate={dialogs.modeCreate}
		/>
		<React.Fragment>
			<ContentWrapper>
				{!dialogs.modeCreate
					? <DialogScroll>
						{state.data.map((item, i) => {
							return <ChatMessageBox key={i}
												   item={item}/>;
						})}
						<div ref={messagesEndRef}/>
					</DialogScroll>
					: <React.Fragment/>
				}
			</ContentWrapper>
			<Footer
				dialogId={dialogs.currentDialog.id}
				action={setState}
				modeCreate={dialogs.modeCreate}>
			</Footer>
		</React.Fragment>
	</Wrapper>
};

export default React.memo(Messages);

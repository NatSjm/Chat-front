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
} from 'fetches';


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
		dialogId: dialogs.data[0].id,
	}));
	const fetchMessages = React.useCallback((...rest) => fetchMessagesFunc(...rest, setState), [
		setState,
	]);
	const messagesEndRef = useRef(null);

	useEffect(() => {
		if (messagesEndRef.current) {
			messagesEndRef.current.scrollIntoView();
		}
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

		<Header
			dialog={dialogs.data[0]}
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
				dialogId={state.dialogId}
				action={setState}
				modeCreate={dialogs.modeCreate}>
			</Footer>
		</React.Fragment>
	</Wrapper>
};

export default React.memo(Messages);

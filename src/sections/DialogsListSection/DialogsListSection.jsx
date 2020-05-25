import React from "react";
import styled from "styled-components";
import Block from 'components/Block';
import ContentWrapper from './ContentWrapper';
import Scroll from 'components/Scroll';
import {DialogsListHeader} from 'components/ChatHeader';
import {MenuButton} from 'components/Button';
import {Search as SearchInput} from 'components/Input';
import DialogListItem from "./DialogListItem";

const Wrapper = styled(Block)`
   border-right: 2px solid rgba(120, 109, 134, 0.2);
   background-color: ${({theme:{colors}}) => colors.secondaryPurple}; 
`;
const DialogsListSection = () => {
	let contactItems = [];
	for (let i = 0; i < 30; i++) {
		contactItems.push(<DialogListItem key={i}/>);
	}
	return <Wrapper>
		<DialogsListHeader>
			<MenuButton/>
			<SearchInput/>
		</DialogsListHeader>
		<ContentWrapper>
			<Scroll>
				{contactItems}
			</Scroll>
		</ContentWrapper>
	</Wrapper>;
};

export default React.memo(DialogsListSection);

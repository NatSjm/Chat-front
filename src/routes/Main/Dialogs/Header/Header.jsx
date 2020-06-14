import React from 'react';
import styled from 'styled-components';
import  ChatHeaderWrapper  from 'components/ChatHeader';
import { MenuButton } from 'components/Button';
import { Search as SearchInput } from 'components/Input';


const Wrapper = styled(ChatHeaderWrapper)`
	margin-left: 10px;
	margin-right: 10px;
	padding: 20px;	 
`;
const Header = (props) => {
	return <Wrapper>
			<MenuButton
				onClick={props.onClick}
				modeCreate={props.modeCreate}
			     />
			<SearchInput/>
		</Wrapper>

};
export default React.memo(Header);

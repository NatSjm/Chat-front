import React from 'react';
import styled from 'styled-components';
import Block from 'components/Block';

const Wrapper = styled(Block)`	
  
     border: 1px solid  ${({theme: {colors}}) => colors.lightPurple};
	 overflow: visible;
	 margin-bottom: 60px;	
	 max-width: 310px;
	 border-radius: 6px;
	 padding: 20px;
	 position: relative;
	 
	${({theme: {messageBox}, myMessage},) => {
	return myMessage ? messageBox.myMessageBox : messageBox.responseMessageBox;
}}
   	 & div{
	    display: flex;
	    justify-content: space-between;
	    align-items: baseline;
	    width: 76px;
		text-transform: uppercase;		
		position: absolute;
        bottom: -30px;       
		color: ${({theme: {colors}}) => colors.fontColor}; 
		
        
}}   
`;
const ChatMessageBox = (props) => (
	<Wrapper myMessage={props.myMessage}>
		{props.children}
	</Wrapper>
);
export default ChatMessageBox;


import React, {useState} from 'react';
import styled from 'styled-components';
import Block, {Flex, OptionsCover} from 'components/Block';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPencilAlt, faTrashAlt, faTimes} from '@fortawesome/free-solid-svg-icons';
import {IconButton} from 'components/Button';
import Check from 'components/Icon';
import {timeFormatter} from '../helpers';
import {Text} from 'components/Text'

const Wrapper = styled(Block)`	
     box-sizing: border-box;
     border: 1px solid  ${({theme: {colors}}) => colors.lightPurple};
	 overflow: visible;	 
	 margin-bottom: 60px;	
	 max-width: 315px;
	 border-radius: 6px;
	 padding: 20px;
	 position: relative;
	 
	${({theme: {messageBox}, myMessage}) => {
	return myMessage ? messageBox.myMessageBox : messageBox.responseMessageBox;
}}
   	 & > div:first-of-type{
	    display: flex;
	    flex-wrap: nowrap;
	    justify-content: space-between;
	    align-items: baseline;
	    width: 60px;	    
	    overflow: hidden;
		text-transform: uppercase;		
		position: absolute;
        bottom: -30px;       
		color: ${({theme: {colors}}) => colors.fontColor}; 
		}} ;
	
`;

const ChatMessageBox = ({item}) => {
		const [showOptions, setShowOptions] = useState(false);
		// console.log(showOptions);
		return <Wrapper
			myMessage={!!item.me}
			// onClick={() => setShowOptions(!showOptions)}>
			onClick={() => setShowOptions(true)}>
			<Text>
				{item.body}
			</Text>
			<Flex>
				<Check/>
				<span>{timeFormatter(item.createdAt)}</span>
			</Flex>

			{showOptions && (<OptionsCover>
				<IconButton onClick={(e) => {
					    e.stopPropagation();
				        setShowOptions(false)}}>
					<FontAwesomeIcon icon={faTimes}/>
				</IconButton>
				<IconButton>
					<FontAwesomeIcon icon={faPencilAlt}/>
				</IconButton>
				<IconButton>
					<FontAwesomeIcon icon={faTrashAlt}/>
				</IconButton>
							</OptionsCover>)
			}
		</Wrapper>
	}
;
export default React.memo(ChatMessageBox);


import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import Block, {Flex, OptionsCover} from 'components/Block';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPencilAlt, faTrashAlt, faTimes, faCheck} from '@fortawesome/free-solid-svg-icons';
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
		const [modeEdit, setModeEdit] = useState(false);
		const [textValue, setTextValue] = useState(item.body);
		const messageEditing = useRef(null);
		const messageEdit = (e) => {
			e.stopPropagation();
			setModeEdit(true);
			messageEditing.current.focus();
		};
		// useEffect(() => {
		// 	console.log(textValue);
		// }, [textValue]);

		const updateMessage = (e) => {
			e.stopPropagation();
			setTextValue(messageEditing.current.innerText);
			setModeEdit(false);
			setShowOptions(false);
		};

		const closeOptions = (e) => {
			e.stopPropagation();
			setShowOptions(false);
		};

		const cancelEdit = async (e) => {
			e.stopPropagation();
			await (setTextValue(messageEditing.current.innerText));
			setTextValue(item.body);
			setModeEdit(false);
			setShowOptions(false);
		};

		return <Wrapper
			myMessage={!!item.me}
			onClick={() => setShowOptions(true)}>
			<Text contentEditable={modeEdit}
				  suppressContentEditableWarning
				  tabIndex="1"
				  ref={messageEditing}>
				{textValue}
			</Text>
			<Flex>
				<Check/>
				<span>{timeFormatter(item.createdAt)}</span>
			</Flex>

			{showOptions && (<OptionsCover>
				<IconButton onClick={modeEdit
					? cancelEdit
					: closeOptions}>
					<FontAwesomeIcon icon={faTimes}/>
				</IconButton>
				{modeEdit
					? <IconButton>
						<FontAwesomeIcon icon={faCheck}
										 onClick={updateMessage}/>
					</IconButton>
					: <React.Fragment>
						<IconButton>
							<FontAwesomeIcon icon={faPencilAlt}
											 onClick={messageEdit}/>
						</IconButton>
						<IconButton>
							<FontAwesomeIcon icon={faTrashAlt}/>
						</IconButton>
					</React.Fragment>
				}
			</OptionsCover>)
			}
		</Wrapper>
	}
;
export default React.memo(ChatMessageBox);


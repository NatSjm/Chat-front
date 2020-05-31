import React, {useState, useRef} from "react";
import {BriefTextBlock, OptionsCover} from 'components/Block';
import ChatHeaderWrapper from 'components/ChatHeader';
import {Avatar} from 'components/Image';
import {Headline3, Text} from 'components/Text';
import {CameraButton} from 'components/Button';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faPencilAlt, faTimes, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {IconButton} from 'components/Button';
import styled from "styled-components";

const Wrapper = styled(ChatHeaderWrapper)`	
position: relative;
& div:last-child{
  right: 108px;
  width: 80px;
}
    
`;
const Header = () => {
	const dialogName = 'Dialog Name';
	const [showOptions, setShowOptions] = useState(false);
	const [modeEdit, setModeEdit] = useState(false);
	const [textValue, setTextValue] = useState(dialogName);
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
		setTextValue(dialogName);
		setModeEdit(false);
		setShowOptions(false);
	};
	return <Wrapper
		onClick={() => setShowOptions(true)}>
		<Avatar single/>
		<BriefTextBlock>
			<Headline3
				contentEditable={modeEdit}
				suppressContentEditableWarning
				tabIndex="1"
				ref={messageEditing}
			>
				{textValue}
			</Headline3>
			<Text>
				online
			</Text>

		</BriefTextBlock>
		<CameraButton/>
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
};

export default React.memo(Header);

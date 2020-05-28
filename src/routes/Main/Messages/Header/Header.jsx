import React, {useState} from "react";
import {BriefTextBlock, OptionsCover} from 'components/Block';
import ChatHeaderWrapper from 'components/ChatHeader';
import {Avatar} from 'components/Image';
import {Headline3, Text} from 'components/Text';
import {CameraButton} from 'components/Button';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencilAlt, faTimes, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
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
	const [showOptions, setShowOptions] = useState(false);
	return <Wrapper
			onClick={() => setShowOptions(true)}>
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
};

export default React.memo(Header);

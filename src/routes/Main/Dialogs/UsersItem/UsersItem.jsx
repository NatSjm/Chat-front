import React from 'react';
import styled from 'styled-components';
import {Primary} from 'components/Block';
import {Avatar} from 'components/Image';
import {ResolutionContext} from 'components/App/App.jsx';


const Wrapper = styled(Primary)`
flex-direction: row;
justify-content: space-between;
padding-top: 10px;
padding-bottom: 10px;
padding-right: 10px;
border-bottom: 2px solid rgba(120, 109, 134, 0.2);
flex-wrap: nowrap;


& label{
display: flex;
flex-direction: row;
justify-content: space-between;
flex-grow: 1;
margin-left: 20px;
}
`;
const UsersItem = ({ name = '', id}) => {
	const {mobile, tablet} = React.useContext(ResolutionContext);
	return <Wrapper>
		{(!mobile && !tablet) && <Avatar small/>}
		<label>
			<span>{name}</span>
			<input type="checkbox"
				   name="users"
				   value={id}/>
		</label>
	</Wrapper>;
};

export default React.memo(UsersItem);

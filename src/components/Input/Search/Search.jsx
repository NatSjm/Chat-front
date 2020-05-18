import React from 'react';
import styled from 'styled-components';
import Primary from '../Primary.jsx';
import {Primary as PrimaryWrapper} from 'components/Block';
import {Search as SearchIcon} from 'components/Icon';


const Wrapper = styled(PrimaryWrapper)`
flex-grow: 1;
justify-content: flex-start;
margin-left: 20px;
padding-left: 30px;
padding-right: 30px;
border-radius: 40px;
& button{
margin-right: 12px;
}
& input{
flex-grow: 1;
font-size: 1rem;
}
${({theme: {colors}}) => {
    return `
			border: 2px solid ${colors.boundaryPurple};
			background-color: ${colors.primaryPurple};		
				`
}}

`;
const Search = () => (
    <Wrapper>
        <SearchIcon/>
        <Primary type="search" placeholder="Search"/>
    </Wrapper>
);

export default React.memo(Search);

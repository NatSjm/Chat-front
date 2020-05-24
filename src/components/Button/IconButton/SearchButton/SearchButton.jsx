import React from 'react';
import styled from 'styled-components';
import IconButton from '../IconButton.jsx';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'



const Wrapper = styled(IconButton)`	
    font-size: 1rem;
`;
const SearchButton = () => (
    <Wrapper>
        <FontAwesomeIcon icon={faSearch}/>
    </Wrapper>
);

export default SearchButton;

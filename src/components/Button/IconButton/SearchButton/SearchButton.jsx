import React from 'react';
import styled from 'styled-components';
import IconButton from '../IconButton.jsx';
import {Search} from 'components/Icon'


const Wrapper = styled(IconButton)`	
    font-size: 1rem;
`;
const SearchButton = () => (
    <Wrapper>
        <Search/>
    </Wrapper>
);

export default SearchButton;

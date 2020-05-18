import React from 'react';
import styled from 'styled-components';
import {IconButton} from 'components/Button';
import Icon from './Icon'

const Wrapper = styled(IconButton)`	
    font-size: 1rem;
`;
const Search = () => (
    <Wrapper>
        <Icon icon="search"/>
    </Wrapper>
);

export default Search;

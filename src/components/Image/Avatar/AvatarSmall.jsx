import React from 'react';
import styled from 'styled-components';
import Block from 'components/Block'
import Image from '../Image.jsx';
import avatarDefault from 'img/avatarDefault.jpg'

const Wrapper = styled(Block)`
flex-shrink: 0;
z-index: 3;
width: 60px;
height: 60px;
border-radius: 50%;
box-sizing: border-box;
overflow: visible;
 ${({theme: {colors}}) => {
    return `
     border: 2px solid ${colors.borderGrey};  
    `
}}
//position: relative;

& img{
z-index:5;
width: 100%;
height: 100%;
border-radius: 50%; 
}
`;
const AvatarSmall = () => (
    <Wrapper>
        <Image src={avatarDefault}/>
    </Wrapper>
);

export default React.memo(AvatarSmall);

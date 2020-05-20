import React from 'react';
import styled from 'styled-components';
import Block from 'components/Block'
import Image from '../Image.jsx';
import {CheckCircle} from 'components/Icon';
import avatarDefault from 'img/avatarDefault.jpg'

const Wrapper = styled(Block)`
flex-shrink: 0;
z-index: 3;
width: 84px;
height: 84px;
border-radius: 50%;
position: relative;
overflow: visible;

 ${({theme: {colors}}) => {
    return `
     border: 4px solid ${colors.lightPurple};  
    `
}}
//position: relative;
& div{
z-index: 10;
position: absolute;
bottom: -5px;
right: -5px;
}
& img{
z-index:5;
width: 100%;
height: 100%;
border-radius: 50%; 
}
`;
const Avatar = () => (
    <Wrapper>
        <Image src={avatarDefault}/>
        <CheckCircle/>
    </Wrapper>
);

export default React.memo(Avatar);

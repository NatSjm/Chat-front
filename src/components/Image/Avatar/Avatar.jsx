import React from 'react';
import styled from 'styled-components';
import Block from 'components/Block'
import Image from '../Image.jsx';
import {CheckCircle} from 'components/Icon';
import avatarDefault from 'img/avatarDefault.jpg'

const Wrapper = styled(Block)`
flex-shrink: 0;
z-index: 3;
width: 60px;
height: 60px;
border-radius: 50%;
position: relative;
overflow: visible;
box-sizing: content-box;
 ${({theme: {colors}}) => {
    return `
     border: 2px solid ${colors.boundaryPurple};  
    `
}}
//position: relative;
& div{
z-index: 10;
position: absolute;
bottom: 0;
right: 0;
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

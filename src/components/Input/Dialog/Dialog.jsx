import styled from 'styled-components';
import Primary from '../Primary';
import React from "react";


const Wrapper = styled(Primary)`
   border-bottom: 2px solid rgba(120, 109, 134, 0.2);
   font-weight: bold;
   padding: 20px;
   padding-left: 30px;
   font-size: 24px;
   &::placeholder{
   font-weight: normal;
   }
	`;
let Dialog = (props) => {
	return <Wrapper { ...props } type="text" />;
};

Dialog = React.memo(Dialog);
Dialog.defaultProps = {
	placeholder: 'Введите название чата',
};

export default Dialog;


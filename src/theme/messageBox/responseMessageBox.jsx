import * as colors from './../colors.js'
 const responseMessageBox = `
background-color: ${colors.lightPurple};
align-self: flex-start;

&::after{
	position: absolute;
	content: '';
	width: 0;
	height: 0;
	border: 9px solid transparent;
	left: -9px;
	margin-top: -9px;
	margin-left: -9px;
	
	top: 25px;
	border-right-color: ${colors.lightPurple};
}

& div{
    flex-direction: row;
    left: 0;
}
`;
export default responseMessageBox;

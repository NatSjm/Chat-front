import * as colors from './../colors.js'
const myMessageBox = `

background-color: ${colors.transparentLightPurple};

align-self: flex-end;
&::after,
&::before{
	position: absolute;
	content: '';
	width: 0;
	height: 0;
	border: 9px solid transparent;
	right: 1px;
	border-right: 0;
	margin-top: -9px;
	margin-right: -9px;	
	top: 25px;
	border-left-color: ${colors.transparentLightPurple};

}
&::before{
 	margin-right: -10px;
	border-left-color: ${colors.lightPurple};
}

& div{
    flex-direction: row-reverse;
    right: 0;
}
`;
export default myMessageBox;

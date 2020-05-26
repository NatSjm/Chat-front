import * as colors from './../colors.js'
 const responseMessageBox = `
background-color: ${colors.lightPurple};
align-self: flex-start;
padding-right: 50px;
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

& > div:first-of-type{
    flex-direction: row;
    left: 0;
};

& > div:last-of-type{
 	right: 0;
 	border-radius: 0 6px 6px 0;
 	};
`;
export default responseMessageBox;

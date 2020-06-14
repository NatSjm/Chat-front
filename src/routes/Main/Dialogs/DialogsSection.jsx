import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import Block from 'components/Block';
import ContentWrapper from './ContentWrapper';
import Scroll from 'components/Scroll';
import DialogsItem from './DialogsItem';
import Header from './Header';
import UsersItem from './UsersItem';
import Footer from './Footer';
import {Dialog as DialogInput} from 'components/Input';
import {DialogCreate as CreateForm} from 'components/Form';
import {Save as Button} from 'components/Button';
import {
	dialogs as fetchDialogs,
	users as fetchUsers,
	dialogCreate as createFunc
} from 'fetches';


export const Dialogs = React.createContext();
const Wrapper = styled(Block)`
   border-right: 2px solid rgba(120, 109, 134, 0.2);   
   background-color: ${({theme: {colors}}) => colors.secondaryPurple}; 
`;

const DialogsSection = ({history, children}) => {
	const [state, setState] = React.useState(() => ({
		data: [],
	}));
	const [users, setUsers] = React.useState(() => ({
		data: [],
	}));
	const [modeCreate, setModeCreate] = useState(false);


	// onMount
	React.useEffect(() => {
		fetchDialogs(history, setState);
	}, [
		history,
		setState,
	]);
	// React.useEffect(() => {
	// //	console.log(users);
	// }, [
	// 	users
	// ]);
	const clickHandler = (e) => {
		e.preventDefault();
		setModeCreate(true);
	};
	React.useEffect(() => {
		if (modeCreate) {
			fetchUsers(setUsers);
		}
		console.log(modeCreate);
		//console.log(state.data);

	}, [
		modeCreate,
		//history,
		setUsers
	]);
     //create
	const onSubmit = React.useCallback((e) => {
		e.preventDefault();
		const formdata   = new FormData(e.currentTarget);
		const name = formdata.get('name');
		const users = formdata.getAll('users');
		return createFunc(name, users);

	}, [

	]);

	return <React.Fragment>
		<Wrapper>
			<Header
				modeCreate={modeCreate}
				onClick={clickHandler}/>
			<ContentWrapper>


				{!modeCreate
					? <Scroll>
						{state.data.map(({name, body = ''}, i) => {
						return <DialogsItem
						key={i}
						name={name}
						body={body} />
					})
						}
					</Scroll>
					: <CreateForm
					   onSubmit={onSubmit}>
						<DialogInput
						name = 'name'/>
						<Scroll>
						{users.data.map(({name, id}, i) => {
							return <UsersItem
								key={i}
								name={name}
								id={id}/>
						})

						}
						</Scroll>
						<Footer>
                        <Button
							type='submit'/>
                        <Button onclick={(e)=> e.preventDefault()}>Отмена</Button>
						</Footer>
					</CreateForm>
				}

		</ContentWrapper>
	</Wrapper>
	{
		((state.data.length > 0) || modeCreate)
			? <Dialogs.Provider value={{data: state.data, modeCreate}}>
				{children}
			</Dialogs.Provider>
			: <React.Fragment>
			</React.Fragment>
	}
</React.Fragment>;
};

export default React.memo(withRouter(DialogsSection));

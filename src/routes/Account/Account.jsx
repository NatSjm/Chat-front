import React from 'react';
import {Secondary as BlockSecondary} from 'components/Block';
import {Avatar as InputAvatar} from 'components/Input';
import {User as FormUser} from 'components/Form';
import {ResolutionContext} from 'components/App/App.jsx';

const Account = () => {
	const resolution = React.useContext(ResolutionContext);
	return <>
		<BlockSecondary {...resolution}>
			<InputAvatar/>
			<FormUser {...resolution} />

		</BlockSecondary>
	</>
};

export default Account;

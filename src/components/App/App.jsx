import React from 'react';
import {
	BrowserRouter,
	Switch,
	Route,
//	Link,
} from 'react-router-dom';
import {
	Main,
	Account
} from 'routes';

import {useResolution} from 'components/Hooks';


export const ResolutionContext = React.createContext();
const App = () => {
	const resolution = useResolution();

	return <React.Fragment>
	<ResolutionContext.Provider value = {resolution}>
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Main/>
				</Route>
				<Route exact path="/account">
					<Account/>
				</Route>
			</Switch>
		</BrowserRouter>
		</ResolutionContext.Provider>
	</React.Fragment>;

};

export default React.memo(App);

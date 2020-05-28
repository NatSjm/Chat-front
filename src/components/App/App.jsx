import React from 'react';
import {
	BrowserRouter,
	Switch,
	Route,
//	Link,
} from 'react-router-dom';
import {
	Main
} from 'routes';


const App = () => {

	return <React.Fragment>
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Main/>
				</Route>
			</Switch>
		</BrowserRouter>
	</React.Fragment>;

};

export default React.memo(App);

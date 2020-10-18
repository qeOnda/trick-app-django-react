import React, { useEffect, useState, useCallback } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import Home from './Views/Home'
import Background from './Components/Background'
import Header from './Components/Header'
import Category from './Views/Category'
import Random from './Views/Random'
import Register from './Views/Register'
import Add from './Views/Add'
import Log from './Components/Log'
import Hello from './Components/Hello'



function App() {
	const [loadHeader, setLoadHeader] = useState(false);

	const setLoadedHeader = useCallback(() => {
		setLoadHeader(true);
	}, [])

	return (
	    <div>
	    	<Router>
		    	<Header setLoadedHeader={setLoadedHeader} />
			    	<div>
				    	<Switch>
				    		<Route exact path="/">
				    			{loadHeader && <Home />}
				    		</Route>
				    		<Route path="/add">
				    			<Add />
				    		</Route>
				    		<Route path="/categories">
				   				<Category />
				    		</Route>
				    		<Route path="/random">
				    			<Random />
				    		</Route>
				    		<Route path="/hello">
				    			<Hello />
				    		</Route>
				    		<Route path="/login">
				    			<Log />
				    		</Route>
				    		<Route path="/register">
				    			<Register />
				    		</Route>
				    	</Switch>	
				    </div>	
	    	</Router>
		</div>
	);
}

export default App;

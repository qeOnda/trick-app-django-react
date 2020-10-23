import React, { useEffect, useState, useCallback } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import Home from './Views/Home'
import Header from './Components/Header'
import Category from './Views/Category'
import Cats from './Views/Cats'
import CatsId from './Views/CatsId'
import Random from './Views/Random'
import Register from './Views/Register'
import Add from './Views/Add'
import Login from './Components/Login'
import Hello from './Components/Hello'
import Flip from './Views/Flip'
import Manual from './Views/Manual'
import Grind from './Views/Grind'
import Slide from './Views/Slide'
import getUser from './Services/getUser'
import RegLogMessage from './Components/RegLogMessage'
import Guarded from './Components/Guarded'

import Auth from './Services/auth.service'



function App() {
	const [loadHeader, setLoadHeader] = useState(false);
	const setLoadedHeader = useCallback(() => {
		setLoadHeader(true);
	}, [])

	return (
		<Router>
			<Header setLoadedHeader={setLoadedHeader}/>
					<Switch>
						<Route exact path="/login">
			    			<Login />
			    		</Route>
			    		<Route path="/register">
			    			<Register />
			    		</Route>
			    		<Route path="/home">
			    			<RegLogMessage />
			    		</Route>
			    		<Guarded exact path='/' component={Home} setLoadedHeader={setLoadedHeader} props={loadHeader} />
			    		<Guarded path='/add' component={Add} />
			    		<Guarded path='/random' component={Random} />
			    		<Guarded path='/hello' component={Hello} />
			    		<Guarded path='/categories' component={Cats} />
			    	</Switch>	
			</Router>	
	)	
}

export default App;

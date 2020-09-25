import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import Tricks from './Views/Tricks'
import Background from './Components/Background'
import Header from './Components/Header'
import Category from './Views/Category'
import Random from './Views/Random'
import Add from './Views/Add'

function App() {
  return (
    <div>
    	<Router>
	    	<Header />
		    	<div className='bg-primary h-screen'>
			    	<Switch>
			    		<Route exact path="/">
			    			<h1>Welcome to the HOME page</h1>
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
			    	</Switch>	
			    </div>	
    	</Router>
	</div>
  );
}

export default App;

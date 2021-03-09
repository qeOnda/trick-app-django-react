import React from 'react';
import { Route, Redirect } from "react-router-dom";
import Auth from '../Services/auth.service'

const Guarded = ({ component: Component, auth, ...rest }) => (
    <Route {...rest} render={(props) => (
		Auth.getCurrentUser() === true
			? <Component {...props} />
			: <Redirect to='/home' />
	)} />
)

export default Guarded;
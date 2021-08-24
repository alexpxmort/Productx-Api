import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Shop from '../pages/shop/shop.component';
import SignInPage from '../pages/sign-in-page/sign-in-page.component';

export default class Router extends Component {
	render() {
		return (
			<div>
				<Switch>
                    <Route exact component={SignInPage} path={'/'}/>
					<Route component={Shop} path="/shop" />
				</Switch>
			</div>
		);
	}
}


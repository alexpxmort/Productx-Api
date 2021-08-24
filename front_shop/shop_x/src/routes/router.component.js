import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Shop from '../pages/shop/shop.component';
import SignInPage from '../pages/sign-in-page/sign-in-page.component';
import {selectCurrentUser} from '../redux/selectors/user.selector';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';

class Router extends Component {
	render() {
		return (
			<div>
				<Switch>
                    <Route exact 
					 path={'/'}
					 render={() =>
							this.props.currentUser ? (
								<Redirect to="/" />
							) : (
								<SignInPage />
							)
						}

					 />
					<Route component={Shop} path="/shop" />
				</Switch>
			</div>
		);
	}
}


const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});
export default connect(mapStateToProps, {})(Router);

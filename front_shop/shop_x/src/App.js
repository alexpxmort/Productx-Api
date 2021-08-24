import React, { useEffect, useContext } from 'react';
import { GlobalStyle } from './global.styles';
import Router from './routes/router.component';
import Header from './components/header/header.component';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import { checkUserSession } from './redux/actions/AuthAction';
import { withRouter } from 'react-router-dom';
import UserContext from './contexts/user/userContext';
import { selectCurrentUser } from './redux/selectors/user.selector';

const App = ({ currentUser }) => {

  useEffect(() => {
		checkUserSession();
	}, [checkUserSession]);

	return (
		<div>
			<GlobalStyle />
			<UserContext.Provider value={currentUser}>
			{currentUser ? (
						<Header/>
					) : null}
			</UserContext.Provider>
			<Router />
		</div>
	);
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
	checkUserSession: () => dispatch(checkUserSession()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

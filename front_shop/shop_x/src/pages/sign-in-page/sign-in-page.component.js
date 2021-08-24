import React from 'react'
import './signin-and-signup.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/selectors/user.selector';
import { Shop } from '@material-ui/icons';



const SignInPage = ({currentUser}) => (
    <div className='sign-in-and-sign-up'>
      {
          <SignIn />
      }
    </div>
  );
  
  
  const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
});

export default withRouter(connect(mapStateToProps,{})(SignInPage))
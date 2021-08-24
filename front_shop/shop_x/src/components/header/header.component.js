import React, { useState, useContext } from 'react';
import './header.styles.scss';
import { Link, withRouter } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import cartIconContext from '../../contexts/cart/cartIconContext';
import UserContext from '../../contexts/user/userContext';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { signOut } from '../../redux/actions/AuthAction';


const Header = ({history}) => {
	const [hidden, setHidden] = useState(true);
	const [isMovie, setIsMovie] = useState(false);
	const currentUser = useContext(UserContext);
	const dispatch = useDispatch();

	const toggleHidden = () => setHidden(!hidden);

	const _signOut = ()=>{
		dispatch(signOut());
		
		history.push('/');
	}

	return (
		<div className="header" style={{ width: '100%' }}>
			<div className="logo-container">
				<Logo className="logo" />
			</div>
			<div className="options">
				<cartIconContext.Provider value={{
                hidden,
                toggleHidden,
                isMovie,
                changeIsMovie:setIsMovie
            }}>
                <CartIcon isMovie={false}/>
            </cartIconContext.Provider>
            {hidden?null: <CartDropDown isMovie={false}/>} 
				{
					(currentUser)?(
						<div style={{flexDirection:'row',display:'flex',justifyContent:	'center'}}>
							<div style={{marginTop:10}}>{currentUser.name}</div>
							<Button variant={'filled'} onClick={_signOut}>LOG OUT </Button>
						</div>
					):<div/>
				}
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
});
export default withRouter(connect(null, mapDispatchToProps)(Header));

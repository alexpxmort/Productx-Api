import { CardActionTypes } from '../actions/types';
import { addItemToChart, removeItemFromCart } from '../utils/cart.utils';

const INITIAL_STATE = {
	hidden: true,
	cartItems: [],
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CardActionTypes.CLEAR_CART:
			return {
				...state,
				cartItems: [],
			};
			break;
		case CardActionTypes.TOOGLE_CART_HIDDEN:
			return { ...state, hidden: !state.hidden };
			break;
		case CardActionTypes.ADD_ITEM:
			return {
				...state,
				cartItems: addItemToChart(state.cartItems, action.payload),
			};
			break;
		case CardActionTypes.CLEAR_ITEM_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter(
					(cartItem) => cartItem.id != action.payload.id,
				),
			};
			break;

		case CardActionTypes.REMOVE_ITEM_TO_CHART:
			return {
				...state,
				cartItems: removeItemFromCart(state.cartItems, action.payload),
			};
			break;
		default:
			return state;
	}
};
